import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { getFeed } from "../utils/api";

export default function Feed() {
  const [feed, setFeed] = useState([]);

  const { user } = useAuth();

  const fetchGreeting = async () => {
    try {
      const data = await getFeed();
      setFeed(data.feed);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchGreeting();
  }, [user]);

  return (
    <Page>
      <h2>My Feed</h2>
      <p>Find amazing pictures anywhere.</p>
      <Grid>
        {feed.map((item) => (
          <ImageContainer key={item.id}>
            <Image src={item.urls.regular} alt={item.description} />{" "}
          </ImageContainer>
        ))}
      </Grid>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: block;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
`;
