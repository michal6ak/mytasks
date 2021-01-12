// src/components/Task.js

import React from 'react';
import {Interface} from "readline";
import {ButtonProps} from "../stories/Button";

export interface TaskProps {
    id: string;
    title: string;
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
    readonly: boolean;
    onClick?: () => void;
}

/**
 * UI component for user interaction
 */
export const Task: React.FC<TaskProps> = ({
                                              id,
                                              title,
                                              state = "TASK_INBOX",
                                              readonly = true,
                                              ...props
                                          }) => {
    return (
        <input type="text" value={title} readOnly={readonly}/>
    );
};