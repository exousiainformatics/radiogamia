import React from 'react'
import { MapInteractionCSS } from 'react-map-interaction';
import {Image} from 'react-bootstrap';
export default function index(props) {
    return (
        <div style={{height: '80vh'}} className="mt-4">
            <MapInteractionCSS>
                {props.data.map((data,index)=>(
                    <Image src={data.image} width="100%"/>
                ))}
            </MapInteractionCSS>
        </div>
    )
}
