import React from 'react';
import { mount, shallow } from "enzyme"
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en DashBoardRoutes', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user : {
            logged: false,
            name:'Juanito'
        }
    }

    test('debe de mostrarse correctamente', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                        <DashboardRoutes />
                </MemoryRouter>
            
            </AuthContext.Provider>
            
            
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')
        
    })
    
    
})
