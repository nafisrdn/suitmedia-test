import styled from "styled-components";
export const Post = styled.div`
    color: #000;

    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.10);
    border-radius: 12px;
    overflow: hidden;

    a {
        color: inherit;

        text-decoration: none;
        &:hover {
            color: inherit;
        }
    }
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 155px;

    background-size: cover;
    background-repeat: no-repeat;
`;

export const Main = styled.main`
    height: 155px;
`;

export const DateText = styled.span`
    color: #999999;
`;
export const Title = styled.h3`
    font-size: 1rem;
`;