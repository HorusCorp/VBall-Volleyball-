import React,{useState}  from 'react'

function CarousselHome() {

    const [img,setimg] = useState(1)

    if(img === 1){
    return (
        <div className='caroussel_home'>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <div className='left_arrow' onClick={()=>setimg(9)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
            <img className='displayed_img' src='../../CarousselMain.jpg' width='950' height='500'></img>
            <div className='right_arrow' onClick={()=>setimg(2)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
        </div>  
            
            <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
            </div>
        </div>
    )}

    if(img === 2){
        return (
            <div className='caroussel_home'>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                <div className='left_arrow' onClick={()=>setimg(1)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                <img className='displayed_img' src='../../Caroussel2.jpg' width='950' height='500'></img>
                <div className='right_arrow' onClick={()=>setimg(3)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
            </div>  
                
                <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                </div>
            </div>
        )}

        if(img === 3){
            return (
                <div className='caroussel_home'>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                    <div className='left_arrow' onClick={()=>setimg(2)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                    <img className='displayed_img' src='../../Caroussel3.jpg' width='950' height='500'></img>
                    <div className='right_arrow' onClick={()=>setimg(4)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
                </div>  
                        <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                        <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                        <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                        <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                        <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                        <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                        <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                        <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                        <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                    </div>
                </div>
            )}

            if(img === 4){
                return (
                    <div className='caroussel_home'>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                        <div className='left_arrow' onClick={()=>setimg(3)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                        <img className='displayed_img' src='../../Caroussel4.jpg' width='950' height='500'></img>
                        <div className='right_arrow' onClick={()=>setimg(5)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
                    </div>  
                        
                        <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                            <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                            <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                            <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                            <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                            <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                            <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                            <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                            <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                        </div>
                    </div>
                )}

                if(img === 5){
                    return (
                        <div className='caroussel_home'>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                            <div className='left_arrow' onClick={()=>setimg(4)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                            <img className='displayed_img' src='../../Caroussel5.jpeg' width='950' height='500'></img>
                            <div className='right_arrow' onClick={()=>setimg(6)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
                        </div>  
                            
                            <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                                <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                                <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                                <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                                <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                                <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                            </div>
                        </div>
                    )}

                    if(img === 6){
                        return (
                            <div className='caroussel_home'>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                <div className='left_arrow' onClick={()=>setimg(5)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                                <img className='displayed_img' src='../../Caroussel6.jpg' width='950' height='500'></img>
                                <div className='right_arrow' onClick={()=>setimg(7)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
                            </div>  
                                
                                <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                    <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                    <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                                    <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                                    <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                                    <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                                    <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                                    <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                    <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                </div>
                            </div>
                        )}
                    
                        if(img === 7){
                            return (
                                <div className='caroussel_home'>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                    <div className='left_arrow' onClick={()=>setimg(6)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                                    <img className='displayed_img' src='../../Caroussel7.jpeg' width='950' height='500'></img>
                                    <div className='right_arrow' onClick={()=>setimg(8)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
                                </div>  
                                    
                                    <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                        <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                        <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                                        <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                                        <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                                        <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                                        <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                                        <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                        <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                    </div>
                                </div>
                            )}
                        
                            if(img === 8){
                                return (
                                    <div className='caroussel_home'>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                        <div className='left_arrow' onClick={()=>setimg(7)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                                        <img className='displayed_img' src='../../Caroussel8.jpg' width='950' height='500'></img>
                                        <div className='right_arrow' onClick={()=>setimg(9)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
                                    </div>  
                                        
                                        <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                            <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                            <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                            <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                                            <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                                            <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                                            <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                                            <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                                            <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                            <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                        </div>
                                    </div>
                                )}

                                if(img === 9){
                                    return (
                                        <div className='caroussel_home'>
                                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                            <div className='left_arrow' onClick={()=>setimg(8)}><img src='../../multimedia-option.svg' width='50' height='50'></img></div>
                                            <img className='displayed_img' src='../../Caroussel9.jpg' width='950' height='500'></img>
                                            <div className='right_arrow' onClick={()=>setimg(1)}><img src='../../left-and-right-arrows.svg' width='50' height='50'></img></div>
                                        </div>  
                                            
                                            <div className='img_list' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                            <img onClick={()=>setimg(1)} src='../../CarousselMain.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                            <img onClick={()=>setimg(2)} src='../../Caroussel2.jpg' className='img_caroussel_home_1' width='100' height='50'></img>
                                            <img onClick={()=>setimg(3)} src='../../Caroussel3.jpg' className='img_caroussel_home_2' width='100' height='50'></img>
                                            <img onClick={()=>setimg(4)} src='../../Caroussel4.jpg' className='img_caroussel_home_3' width='100' height='50'></img>
                                            <img onClick={()=>setimg(5)} src='../../Caroussel5.jpeg' className='img_caroussel_home_4' width='100' height='50'></img>
                                            <img onClick={()=>setimg(6)} src='../../Caroussel6.jpg' className='img_caroussel_home_5' width='100' height='50'></img>
                                            <img onClick={()=>setimg(7)} src='../../Caroussel7.jpeg' className='img_caroussel_home_6' width='100' height='50'></img>
                                            <img onClick={()=>setimg(8)} src='../../Caroussel8.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                            <img onClick={()=>setimg(9)} src='../../Caroussel9.jpg' className='img_caroussel_home_6' width='100' height='50'></img>
                                            </div>
                                        </div>
                                    )}
}

export default CarousselHome
