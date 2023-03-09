import React, { useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { Mumble } from 'services/qwacker';
import { fetchMumbles } from '@/fetchMumbles';
import { MumblePost } from './MumblePost';

type RenderMumbleProps = {
  offset: number;
  limit: number;
};

export const RenderMumbles: React.FC<RenderMumbleProps> = ({ offset, limit }) => {
  const _offset = useMemo(() => offset, []);
  const _limit = useMemo(() => limit, []);

  const { data, error } = useSWR({ url: '/api/mumbles', limit: _limit, offset: _offset }, fetchMumbles, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <>Failed to load</>;

  return (
    <>
      {data &&
        data.mumbles.map((mumble: Mumble) => (
          <MumblePost
            key={mumble.id}
            id={mumble.id}
            creator={mumble.creator}
            text={mumble.text}
            mediaUrl={mumble.mediaUrl}
            createdTimestamp={mumble.createdTimestamp}
            likeCount={mumble.likeCount}
            likedByUser={mumble.likedByUser}
            replyCount={mumble.replyCount}
          />
        ))}
    </>
  );
};