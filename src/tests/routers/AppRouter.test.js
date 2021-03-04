import React from 'react';
import { mount, shallow } from "enzyme"
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en AppRouter', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user : {
            logged: false
        }
    }

    test('Debe mostrar el login si no está autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>

                <AppRouter />

            </AuthContext.Provider>
            
        );

        //console.log(wrapper.html());

        expect( wrapper).toMatchSnapshot();
        
    })

    test('debe de mostrar componente marvel si está autenticado ', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user : {
                logged: true,
                name: 'Juan'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>

                <AppRouter />

            </AuthContext.Provider>
            
        );

        //console.log(wrapper.html());

        expect( wrapper.find('.navbar').exists()).toBe(true);
        
    })
    
    
})
