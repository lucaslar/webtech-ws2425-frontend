import { describe, it, expect, vi } from 'vitest'

import { flushPromises, shallowMount } from '@vue/test-utils'
import axios from 'axios'
import HeroesView from '../../views/HeroesView.vue'
import HeroCard from '../../components/HeroCard.vue'
import type { Hero } from '../../model/hero'

describe('HeroesViewWithRestData', () => {
    vi.mock('axios')

    it('should display info if list from backend is empty', async () => {
        vi.mocked(axios, true).get.mockResolvedValueOnce({ data: [] })
        const wrapper = shallowMount(HeroesView)
        await flushPromises()
        expect(wrapper.text()).toContain('No heroes yet :-(')
    })

    it('should render list from backend', async () => {
        const twoItemsResponse: Hero[] = [
            { id: 1, name: 'R2D2', affiliation: 'Rebellion', heightInM: 1 },
            { id: 2, name: 'C-3PO', affiliation: 'Rebellion', heightInM: 1.7 },
        ]

        vi.mocked(axios, true).get.mockResolvedValueOnce({ data: twoItemsResponse })
        const wrapper = shallowMount(HeroesView)

        await flushPromises()

        expect(wrapper.find('#hero-container').exists()).toBeTruthy()
        expect(wrapper.findAllComponents(HeroCard).length).toBe(twoItemsResponse.length)
    })
})
