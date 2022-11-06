import { css } from 'lit';

export const iconButtonStyle = css`
    :host > svg {
        width: 24px;
        height: 24px;
        margin: 2px;
        display: inline-block;
        background-size: cover;
        border-radius: 4px;
        background-color: #transparent;
        background-repeat: no-repeat;
        cursor: pointer;
        transition: 
            background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1),
            fill:  0.2s cubic-bezier(0.3, 0, 0.5, 1);
    }
    svg {
        fill: white;
    }
    svg:hover {
        background-color: #F3F4F6;
        fill: black;
    }
`;

