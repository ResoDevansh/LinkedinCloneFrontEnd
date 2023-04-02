import styled from 'styled-components'
import Header from './Header'
import Section from './Section'

const Home = () => {
    return (<Body><Header/><Section/></Body>)
}

const Body = styled.div`
    height: 100vh;
    background-color: #F4EFEE;
`
export default Home