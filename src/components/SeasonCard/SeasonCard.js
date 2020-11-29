import * as React from 'react';
import { Flex, Box } from 'reflexbox';

// Styles
import { Wrapper, Cover, Row, TitleBlur, Title, Content } from './styles';

const SeasonCard = (props) => {
  const {
    season,
    position,
    title,
    description,
    contents,
    parity,
    price,
    totalClaimed,
    limitClaimed,
    cover,
    itleBlurImage,
  } = props;

  return (
    <Wrapper>
      <Flex width="100%" flexWrap="wrap">
        <Box width={[1, 1, 1 / 3, 1 / 3]}>
          <Cover />
        </Box>
        <Box width={[1, 1, 2 / 3, 2 / 3]}>
          <Row>
            <TitleBlur>
              <Title>{title}</Title>
            </TitleBlur>
            <Content>
              <p>content</p>
            </Content>
          </Row>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default SeasonCard;
