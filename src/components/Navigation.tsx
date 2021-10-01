import styled from 'styled-components';

const Div = styled.div`
  flex-basis: 50%;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: 'space-around';
  li {
    width: 20%;
  }
  a {
    color: var(--teal);
    text-decoration: none;
  }
`;

export default function Navigation(props: any) {
  return (
    <Div>
      <Ul>
        <li>
          <a href='/'>Wallet</a>
        </li>
        <li>
          <a href='/send'>Send</a>
        </li>
        <li>
          <a href='/receive'>Receive</a>
        </li>
        <li>
          <a href='/transactions'>Transactions</a>
        </li>
        {/* <li>
          <a href='/nfts'>NFTs</a>
        </li> */}
      </Ul>
    </Div>
  );
}
