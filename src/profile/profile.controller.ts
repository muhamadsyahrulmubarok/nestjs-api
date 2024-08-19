import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';
import { ProfileService } from 'src/profile/profile.service';
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Post()
  async createProfile(
    @Res() response,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    try {
      const newProfile =
        await this.profileService.createProfile(createProfileDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Profile has been created successfully',
        newProfile,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Profile not created!',
        error: 'Bad Request',
      });
    }
  }
  @Put('/:id')
  async updateProfile(
    @Res() response,
    @Param('id') profileId: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    try {
      const existingProfile = await this.profileService.updateProfile(
        profileId,
        updateProfileDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Profile has been successfully updated',
        existingProfile,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getProfiles(@Res() response) {
    try {
      const profileData = await this.profileService.getAllProfiles();
      return response.status(HttpStatus.OK).json({
        message: 'All profiles data found successfully',
        profileData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getProfile(@Res() response, @Param('id') profileId: string) {
    try {
      const existingProfile = await this.profileService.getProfile(profileId);
      return response.status(HttpStatus.OK).json({
        message: 'Profile found successfully',
        existingProfile,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteProfile(@Res() response, @Param('id') profileId: string) {
    try {
      const deletedProfile = await this.profileService.deleteProfile(profileId);
      return response.status(HttpStatus.OK).json({
        message: 'Profile deleted successfully',
        deletedProfile,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
