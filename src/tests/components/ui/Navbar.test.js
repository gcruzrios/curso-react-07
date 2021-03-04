import React from 'react';
import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types"
import '@testing-library/jest-dom'

describe('Pruebas en Navbar', () => {
   
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }


    const contextValue = {
        dispatch: jest.fn(),
        user : {
            logged: false,
            name:'Pedro'
        }
    }

    const wrapper= mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                     <Navbar />
                </Router>
               
            </MemoryRouter>
            
        </AuthContext.Provider>
            
    )

    afterEach(()=> {
        jest.clearAllMocks();
    })    

    test('debe de mostrarse correctamente ', () => {
        
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');
    });

    test('debe logout y el usar history ', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect (historyMock.replace).toHaveBeenCalledWith('/login');
    })
    
    
})
