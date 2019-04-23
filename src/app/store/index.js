import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock'

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch (action.type) {
                case mutations.CREATE_TASK:
                    return [...tasks, {
                        id: action.taskId,
                        name: 'New Task', 
                        owner: action.ownerId,
                        group: action.groupId,
                        isComplete: false
                    }]
                case mutations.SET_TASK_COMPLETE:
                    return tasks.map(task => {
                        return (task.id === action.taskId) ? {...task, isComplete: action.isComplete } : task;
                    });
                case mutations.SET_TASK_GROUP: 
                    return tasks.map(task => {
                        return (task.id === action.taskId) ? {...task, group: action.groupId } : task;
                    });
                case mutations.SET_TASK_NAME: 
                    return tasks.map(task => {
                        return (task.id === action.taskId) ? {...task, name: action.name } : task;
                    });
            }
            return tasks;
        },
        comments(comments = defaultState.comments) {
            return comments;
        },
        groups(groups = defaultState.groups) {
            return groups;
        },
        users(users = defaultState.users) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
)

for (let saga in sagas) {
    // sagaMiddleware.run(saga); // shouldn't this be the same thing??? throws error.
    sagaMiddleware.run(sagas[saga]);

}