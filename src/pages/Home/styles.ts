import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.div`
  margin-top: 20px;
  img {
    border: 5px solid #03b352;
    border-radius: 50%;
    max-width: 220px;
  }

  h1 {
    font-size: 30px;
    margin-top: 10px;
  }
`;

export const ProfileContent = styled.div`
  
`;

export const ListSites = styled.div`
  margin-top: 25px;
  display: flex;

  padding: 50px;
`;

export const GitHub = styled.a`
  text-decoration: none;
  justify-content: center;
  text-align: center;
  width: 150px;
  color: #f0f0f5;
  border-radius: 10px;
  cursor: pointer;

  background-image: linear-gradient(to bottom  right, #6e40c9, #03b352);

  padding-top: 5px
`;

export const LinkeDin = styled.a`
  text-decoration: none;
  margin-left: 16px;
  justify-content: center;
  text-align: center;
  width: 150px;
  color: #f0f0f5;
  border-radius: 10px;
  cursor: pointer;

  background-image: linear-gradient(to bottom  right, #004182, #f9fafb);

  padding-top: 5px
`;

export const Email = styled.a`
  text-decoration: none;
  margin-left: 16px;
  justify-content: center;
  text-align: center;
  width: 150px;
  color: #f0f0f5;
  border-radius: 10px;
  cursor: pointer;

  background-image: linear-gradient(to bottom  right, #4285f4, #bb001b, #ea4335, #fbbc05, #34a853);

  padding-top: 5px
`;

export const Instagram = styled.a`
  text-decoration: none;
  margin-left: 16px;
  justify-content: center;
  text-align: center;
  width: 150px;
  color: #f0f0f5;
  border-radius: 10px;
  cursor: pointer;

  background-image: linear-gradient(to bottom  right, #dd2a7b, #feda77);

  padding-top: 5px
`;

