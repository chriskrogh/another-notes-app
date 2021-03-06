import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { NoteContext } from '../../context/note/state';

const SIZE = 60;

const useStyles = makeStyles(({ spacing, palette }) => ({
  button: {
    position: 'absolute',
    bottom: spacing(2),
    right: spacing(2),
    width: SIZE,
    minWidth: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    background: palette.primary.main,
    opacity: 0.9,
    color: palette.text.primary,
  },
}));

const CreateNoteButton = ({ onClick }) => {
  const classes = useStyles();
  const { setNote } = useContext(NoteContext);

  const handleClick = () => {
    setNote({
      title: '',
      description: '',
    });
  };

  return (
    <Button className={classes.button} onClick={handleClick}>
      <AddIcon fontSize="large" />
    </Button>
  );
};

export default CreateNoteButton;
