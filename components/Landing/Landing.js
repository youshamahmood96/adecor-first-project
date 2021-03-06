import { useEffect, useState } from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'
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
        {width>=780 ? <Desktop></Desktop>:<Mobile></Mobile>}
        </>
    )
}
export default Landing 