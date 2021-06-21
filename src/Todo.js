import React, { useState } from "react";
import './Todo.css';    
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, makeStyles,} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
import { Button } from "@material-ui/core";
import { Modal } from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    paper:{
        position: 'absolute',
        width : '400',
        backgroundcolor: theme.palette.background.paper,
        border :'2px solid #000',
        boxShadow:[5],
        padding: theme.spacing(2, 4, 3),

    }
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen =() =>{
        setOpen(true);
    };
    const updateTodo = () =>{
         //update the todo with new input text
         db.collection('todos').doc(props.todo.id).set({
             todo: input

         },{merge: true});

        setOpen(false);
    }


    return (
        <div>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >

        <div className={classes.paper}>
            <h1>iam a model</h1>
            <input placeholder={props.todo.todo}
             value={input} onChange={event =>setInput(event.target.value)} />
            <Button onClick={updateTodo}>Update</Button>
        </div>

        </Modal>
      
            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                           
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo}secondary="this is mine"  />
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit </button>
                <DeleteForeverIcon  onClick={event =>db.collection('todos').doc(props.todo.id).delete()} />
            </List>
        </div>
    );
}

export default Todo;
