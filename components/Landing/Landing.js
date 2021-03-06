import { useEffect, useState } from 'react'
import Hero from './Hero'
import ScrollView from './ScrollView'
import Verses from './Verses'
import VersesMobile from './VersesMobile'
import Vox from './Vox'
const Landing = ()=>{
  const setInitialWidth=()=>{
    if(typeof window !=='undefined'){
      console.log(window.innerWidth);
      return window.innerWidth
    }
  }
    const [dimensions, setDimensions] = useState({ 
        height: undefined,
        width: 1000
      })
      const {width} = dimensions
      useEffect(()=>{
        if(typeof window !=='undefined')
        {
            function handleResize() {
                setDimensions({
                  height: window.innerHeight,
                  width: window.innerWidth
                })
              
          }
          
              window.addEventListener('resize', handleResize)
          
              return _ => {
                window.removeEventListener('resize', handleResize)
              
          }
        }
      },[width])
    return(
        <>
        <Hero></Hero>
        {width>=780 ? <Verses></Verses>:<ScrollView></ScrollView>}
        </>
    )
}
export default Landing 