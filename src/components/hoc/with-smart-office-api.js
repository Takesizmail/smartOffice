import React from 'react'

import {SmartOficeApiConsumer} from "../smart-office-api-context";

const withSmartOfficeApi = () =>(Wrapper) =>{
    return (props)=>{
        return (
            <SmartOficeApiConsumer>

                {
                    (services) =>{
                        return <Wrapper {...props} services={services}/>
                    }
                }

            </SmartOficeApiConsumer>
            )

    }
};

export {withSmartOfficeApi}