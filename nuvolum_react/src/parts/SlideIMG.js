import React from "react";
import { css, jsx } from '@emotion/core'

const SlideIMG = ({ content }) => (
    <img src = {content} 
        // css={css`
        //     background-image: URL('${content}'); 

        // `}
    />
)

export default SlideIMG