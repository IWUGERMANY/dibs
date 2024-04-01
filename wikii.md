---
layout: page
title: Wiki
permalink: /wikii
---

Welcome to the Dynamic-ISO-Building-Simulator wiki!

## Installation Guide
A Step-by-step instruction for installing Anaconda and DIBS are provided in this [PDF document](https://github.com/IWUGERMANY/DIBS---Dynamic-ISO-Building-Simulator/blob/master/doc/DIBS_installation_guide.pdf).

## Documentation 
Full documentation of the structure of DIBS (methodology and data generation) has been bundled in a PDF document which can be found in this repository. [Open PDF document](https://github.com/IWUGERMANY/DIBS---Dynamic-ISO-Building-Simulator/blob/master/doc/DIBS_documentation.pdf).

## Runtime of DIBS
A runtime calculation on two different devices can be found [here](https://github.com/IWUGERMANY/DIBS---Dynamic-ISO-Building-Simulator/blob/master/doc/DIBS_calculation_times.pdf).

## Description of input parameters
The following input parameters are used in the building simulation:   

| Name  | Description  | Unit  |
| :---- | :----------- | :---- |
| scr_gebaeude_id | Building Screening-ID | - |
| plz | Zipcode of building location | - |
| hk_geb | Usage type (main category) | - |
| uk_geb | Usage type (subcategory) | - |
| max_occupancy | Max. number of persons | - |
| wall_area_og | Area of all walls above ground in contact with the outside | m² |
| wall_area_ug | Area of all walls below ground in contact with soil | m² |
| window_area_north | Area of the glazed surface in contact with the outside facing north | m² |
| window_area_east| Area of the glazed surface in contact with the outside facing east | m² |
| window_area_south| Area of the glazed surface in contact with the outside facing south | m² |
| window_area_west| Area of the glazed surface in contact with the outside facing west | m² |
| net_room_area| Area of all floor areas from usable rooms including all floor plan levels of the building | m² |
| energy_ref_area| Energy reference area of the building | m² |
| base_area| Area for the calculation of transmission heat losses to the soil | m² |
| roof_area| Area of the roof in contact with the outside | m² |
| building_height| Mean height of the building | m |
| lighting_load| Lighting load | W/m² |
| lighting_control| Lux threshold at which the lights turn on | Lux |
| lighting_utilisation_factor| A factor that determines how much natural solar lumminace is effectively utilised in the space | - |
| lighting_maintenance_factor| A factor based on how dirty the windows area | - |
| glass_solar_tranmittance| Solar radiation passing through the window (g-value) | - |
| glass_solar_shading_tranmittance| Solar radiation passing through the window with active shading devices | - |
| glass_light_tranmittance| Solar illuminance passing through the window | - |
| u_walls| U value of external walls | W/m²K |
| u_windows| U value of glazed surfaces | W/m²K |
| u_roof| U value of the roof | W/m²K |
| u_base| U value of the floor | W/m²K |
| temp_adj_base| Temperature adjustment factor for the floor | - |
| temp_adj_walls_ug| Temperature adjustment factor for walls below ground | - |
| ach_vent| Air changes per hour through ventilation | 1/h |
| ventilation_efficiency| Efficiency of the heat recovery system for ventilation. Set to 0 if there is no heat recovery | - |
| ach_win| Air changes per hour through opened windows | 1/h |
| ach_inf| Air changes per hour through infiltration | 1/h |
| night_flushing_flow| Air changes per hour through night flushing | 1/h |
| thermal_capacitance| Thermal capacitance of the building | J/m²K |
| t_start| Starting temperatur for simulation | °C |
| t_set_heating| Thermal heating set point | °C |
| t_set_cooling| Thermal cooling set point | °C |
| max_heating_energy_per_floor_area| Maximum heating load per floor area. Set to no.inf for unrestricted heating | W |
| max_cooling_energy_per_floor_area| Maximum cooling load. Set to -np.inf for unrestricted cooling | W |
| heating_supply_system| The type of heating system | - |
| cooling_supply_system| The type of cooling system | - |
| heating_emission_system| How the heat is distributed to the building | - |
| cooling_emission_system| How the cooling energy is distributed to the building | - |
| dhw_system| Is there hot water generation in the building and which system provides it | - |