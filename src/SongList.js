import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "./redux/actions/songActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Title,
  ErrorText,
  Table,
  TableActions,
  TableCell,
  Pagination,
  PageButton,
  TableText,
  TableNum,
  GlobalStyles,
  PlusIcon
} from './styledComponents';
import { Global } from "@emotion/react";
import { useNavigate } from 'react-router-dom';

function SongList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { songs, error } = useSelector((state) => state.songs);
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 5;

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

  const totalPages = Math.ceil(songs.length / songsPerPage);

  // Function placeholders for button actions
  const handleUpdate = (song) => {
    navigate('/update', { state: { song } });
  };

  const handleDelete = (song) => {
    console.log("Delete", song);
    // Implementation for delete action
  };

  return (
    <>
    <Global styles={GlobalStyles} />
    {
      <Container>
      <Title>Songs</Title>
      {error && <ErrorText>Error: {error}</ErrorText>}
      <Table>
        <thead>
          <tr>
            <TableActions as="th">Actions</TableActions>
            <TableText as="th">Song</TableText>
            <TableText as="th">Artist</TableText>
            <TableNum as="th">This Week</TableNum>
            <TableNum as="th">Last Week</TableNum>
            <TableNum as="th">Peak Position</TableNum>
            <TableNum as="th">Weeks on Chart</TableNum>
          </tr>
        </thead>
        <tbody>
          {currentSongs.map((song) => (
            <tr key={song.song + song.artist}>
              <TableActions>
                <button
                  onClick={() => handleUpdate(song)}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <FontAwesomeIcon icon={faEdit} style={{ color: "yellow" }} />
                </button>
                <button
                  onClick={() => handleDelete(song)}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} style={{ color: "red" }} />
                </button>
              </TableActions>
              <TableCell>{song.song}</TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.this_week}</TableCell>
              <TableCell>{song.last_week || "N/A"}</TableCell>
              <TableCell>{song.peak_position}</TableCell>
              <TableCell>{song.weeks_on_chart}</TableCell>
            </tr> 
          ))}
        </tbody>
      </Table>
      <Pagination>
        <PageButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>
          &lt;
        </PageButton>
        <PageButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPages}>
          &gt;
        </PageButton>
      </Pagination>
      <PlusIcon>
        <FontAwesomeIcon icon={faPlus} />
      </PlusIcon>
    </Container>
    }
    </>
      
    
  );
}

export default SongList;
