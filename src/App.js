/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequest } from './redux/actions/songActions';

const Container = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #fff;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #1DB954;
`;

const ErrorText = styled.p`
  color: #E74C3C;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SongItem = styled.li`
  margin-bottom: 10px;
`;

const SongDetail = styled.div`
  margin: 5px 0;
`;

function App() {
  const dispatch = useDispatch();
  const { songs, error } = useSelector(state => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Title>Songs</Title>
      {error && <ErrorText>Error: {error}</ErrorText>}
      <SongList>
        {songs.map((song, index) => (
          <SongItem key={song.song + song.artist}>
            {song.song} - {song.artist}
            <SongDetail>This Week: {song.this_week}</SongDetail>
            <SongDetail>Last Week: {song.last_week || 'N/A'}</SongDetail>
            <SongDetail>Peak Position: {song.peak_position}</SongDetail>
            <SongDetail>Weeks on Chart: {song.weeks_on_chart}</SongDetail>
          </SongItem>
        ))}
      </SongList>
    </Container>
  );
}

export default App;
