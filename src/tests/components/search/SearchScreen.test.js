import { mount } from "enzyme"
import React from 'react';
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe('pruebas en SearchScreen', () => {
   
   
    test('debe de mostrarse correctamente con valores por defecto ', () => {
        
        const wrapper= mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is not a hero hero with');
    })
    

    test('debe de mostrar a Batman y el valor de query string ', () => {
        const wrapper= mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    })
    

})
