import styled, { keyframes} from 'styled-components';

const ani = keyframes`
    from {
        transform: translateY(-60%);
    }
    to {
        transform: translateY(0%);
    }
`

const AnimatedLi = styled.li`
    list-style-type: none;
    color: #f8efef;
    &:hover {
        color: #818181;
    }
    animation: ${ani} 1s ease-out;
`;

export default {
    AnimatedLi
}
