import React from 'react';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis'

const Wrapper = styled.li`
	color: white;
	margin-top: 1em;
`;

const Name = styled.div`
	font-weight: bold;
	font-size: 0.8em;
`;

const Body = styled(LinesEllipsis)`
	font-weight: 1.2rem;
`;

function Review({ name, body }) {
	return (
		<Wrapper>
			<Body text={body} maxLine={5} />
			<Name>{name}</Name>
		</Wrapper>
	);
}

export default Review;