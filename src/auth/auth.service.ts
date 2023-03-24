import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    const { email, password } = dto;
    const hash = await argon.hash(password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          hash,
        },
        select: {
          email: true,
          createdAt: true,
          firstName: true,
          lastName: true,
        },
      });

      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Credentials taken');
      }
    }
  }

  async signin(dto: AuthDto) {
    const { email, password } = dto;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new ForbiddenException('Incorrect Credentials');

    const passMatch = await argon.verify(user.hash, password);

    if (!passMatch) throw new ForbiddenException('Incorrect credentials');

    delete user.hash;

    return user;
  }
}
