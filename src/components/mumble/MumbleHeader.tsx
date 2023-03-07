import React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import {
  Avatar,
  IconLink,
  ImageContainer,
  Paragraph,
  Switch,
  User,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';

type MumbleHeaderProps = {
  alias: string;
};

export const MumbleHeader = ({ alias }: MumbleHeaderProps) => {
  return (
    <MumbleHeaderWrapper>
      <ImageWrapper>
        <ImageContainer
          alt="This is a profile picture"
          onImageIconClick={function noRefCheck() {}}
          src="https://picsum.photos/640/360"
        />
      </ImageWrapper>
      <AvatarWrapper>
        <Avatar variant="xlarge" src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" alt="Username" />
      </AvatarWrapper>
      <User label={'User Name'} variant="xlarge" />
      <InteractionWrapper>
        <IconLink
          label={'username'}
          type="username"
          color="violet"
          href={'#'}
          legacyBehavior
          passHref
          linkComponent={Link}
        />
        <IconLink
          label={'timestamp'}
          type="timestamp"
          color="slate"
          href={'#'}
          legacyBehavior
          passHref
          linkComponent={Link}
        />
        <IconLink
          label="Mitglied seit x Wochen"
          type="joined"
          color="slate"
          href={'#'}
          legacyBehavior
          passHref
          linkComponent={Link}
        />
      </InteractionWrapper>

      <Paragraph text="Schreib was über dich!" color="default" mbSpacing="32" />

      <Switch
        fCallBack={(value) => console.log(value)}
        options={[
          {
            label: 'Deine Mumbles',
            value: 'mumbles',
          },
          {
            label: 'Deine Likes',
            value: 'likes',
          },
        ]}
        value="likes"
      />
    </MumbleHeaderWrapper>
  );
};

const MumbleHeaderWrapper = tw.div`flex flex-col`;
const ImageWrapper = tw.div`flex flex-row justify-end items-end z-0 w-full relative top-0 mt-0`;
const AvatarWrapper = tw.div`flex flex-row justify-end z-10 relative right-32 -top-108 h-0`;
const InteractionWrapper = tw.div`flex flex-col sm:(flex-row) mb-16 gap-16`;
