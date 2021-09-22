import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControl } from 'react-three-fiber/drei'
import Layout from "../components/layout"
import { ambientLight } from "three"

function Box(){
  return(
    <mesh>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='green' />
    </mesh>
  );
}

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <h1>
        Welcome
        <br />
        <span>— here is a sphere! </span>
      </h1>
      <StaticImage alt="test" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
      <Canvas>
        <OrbitControl />
        <ambientLight intensity={0.5} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Box />
      </Canvas>
    </Layout>
  )
}

export default IndexPage