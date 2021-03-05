import { useEffect, useState } from 'react'
import Hero from './Hero'
import Verses from './Verses'
import VersesMobile from './VersesMobile'
import Vox from './Vox'
const Landing = ()=>{
  const setInitialWidth=()=>{
    if(typeof window !=='undefined'){
      return window.innerWidth
    }
  }
    const [dimensions, setDimensions] = useState({ 
        height: undefined,
        width: setInitialWidth()
      })
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
      },[])
      const {width} = dimensions
      console.log(width)
    return(
        <>
        <Hero></Hero>
        {width>=780 ? <Verses></Verses>:<Vox></Vox>}
        </>
    )
}
export default Landing 