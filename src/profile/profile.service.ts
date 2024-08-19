import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { IProfile } from 'src/interface/profile.interface';
import { Model } from 'mongoose';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';
@Injectable()
export class ProfileService {
  constructor(@InjectModel('Profile') private profileModel: Model<IProfile>) {}
  async createProfile(createProfileDto: CreateProfileDto): Promise<IProfile> {
    const newProfile = await new this.profileModel(createProfileDto);
    return newProfile.save();
  }
  async updateProfile(
    profileId: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<IProfile> {
    const existingProfile = await this.profileModel.findByIdAndUpdate(
      profileId,
      updateProfileDto,
      { new: true },
    );
    if (!existingProfile) {
      throw new NotFoundException(`Profile #${profileId} not found`);
    }
    return existingProfile;
  }
  async getAllProfiles(): Promise<IProfile[]> {
    const profileData = await this.profileModel.find();
    if (!profileData || profileData.length == 0) {
      throw new NotFoundException('Profiles data not found!');
    }
    return profileData;
  }
  async getProfile(profileId: string): Promise<IProfile> {
    const existingProfile = await this.profileModel.findById(profileId).exec();
    if (!existingProfile) {
      throw new NotFoundException(`Profile #${profileId} not found`);
    }
    return existingProfile;
  }
  async deleteProfile(profileId: string): Promise<IProfile> {
    const deletedProfile = await this.profileModel.findByIdAndDelete(profileId);
    if (!deletedProfile) {
      throw new NotFoundException(`Profile #${profileId} not found`);
    }
    return deletedProfile;
  }
}
