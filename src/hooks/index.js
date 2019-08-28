import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

const collatedTasksExist = () => {};

export const useTask = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', 'jllf4wy832');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
            ))
            : selectedProject === 'INBOX' || selectedProject === 0
            ? (unsubscribe = unsubscribe.where('date', '==', ''))
            : unsubscribe;
    }, []);
}