import { useEffect, useState } from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'
const Landing = ()=>{
    const [dimensions, setDimensions] = useState({ 
        height: undefined,
        width: undefined
      })
      const {width} = dimensions
      useEffect(()=>{
        if(typeof window !=='undefined')
        {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
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
      console.log(width);
    return(
        <>
        {width>=780 ? <Desktop></Desktop>:<Mobile></Mobile>}
        </>
    )
}
export default Landing 