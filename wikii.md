---
layout: page
title: Wiki
permalink: /wikii
---

Welcome to the `dibs_computing_core` wiki!

## Prerequisites

Before running this program, ensure you have Python 3.10 or higher installed on your system. If Python is not already
installed, you can download and install it from the official website: [Python.org](https://www.python.org/downloads/)

### Installing Python

1. Visit the [Python Downloads](https://www.python.org/downloads/) page.
2. Choose the version appropriate for your operating system (Windows, macOS, or Linux) and click on the download link.
3. Run the installer and follow the installation instructions.
4. During the installation process, make sure to check the box that says "Add Python to **PATH**" or "Add Python to
   environment variables" to ensure Python is added to your system **PATH**.
5. Once the installation is complete, open a command prompt or terminal and type  
`python --version` to verify that Python is installed correctly.

## Installation Guide
To install the module `dibs_computing_core` use the command `pip` like this: 

```bash
pip install dibs_computing_core == 1.0.0
```

## Documentation 
Full documentation of the structure of `dibs_computing_core` (classes, interfaces and methodes) has been bundled in a PDF document which can be found in this repository. [Open PDF document](https://github.com/IWUGERMANY/DibsComputingCore/blob/main/src/DibsDocumentation.pdf).

#### Usage
There are two ways 

## Description of input parameters
The following input parameters are used in the building simulation: 

| Name  | Description  | Unit  |
| :---- | :----------- | :---- |
| `scr_gebaeude_id` | Building Screening-ID | - |
| `plz` | Zipcode of building's location in Germany | - |
| `hk_geb` | Usage type (main category) | - |
| `uk_geb` | Usage type (subcategory) | - |
| `max_occupancy` | Max. number of building occupants at any given time | - |
| `wall_area_og` | Area of all walls above ground in contact with the outside | [m2] |
| `wall_area_ug` | Area of all walls below ground in contact with soil | [m2] | 
| `window_area_north` | Area of the glazed surface in contact with the outside facing north | [m2] |
| `window_area_east` | Area of the glazed surface in contact with the outside facing east | [m2] |
| `window_area_south` | Area of the glazed surface in contact with the outside facing south | [m2] |
| `window_area_west` | Area of the glazed surface in contact with the outside facing west | [m2] |
| `roof_area` | Area of the roof in contact with the outside | [m2] |
| `net_room_area` | Area of all floor areas from usable rooms including all floor plan levels of the building (Refersto "Netto-Raumfläche" DIN 277-1:2016-01) | [m2] |
| `energy_ref_area` | Energy reference area of the building | [m2] |
| `base_area` | Area for the calculation of transmission heat losses to the soil. Also used to calculate the building's volume. | [m2] |
| `gross_base_area` | Gross base area of the building gross_base_area = base_area / 0.87 (currently unused) | - |
| `building_height` | Mean height of the building | [m] |
| `net_volume` | Thermally conditioned net volum of building (air filled space within the building) (currently unused) | [m3] |
| `gross_volume` | Thermally conditioned gross volum of building (air filled space within the building) (currently unused) | [m3] |
| `envelope_area` | Total area of building envelope (currently unused) | [m2] |
| `lighting_load` | Lighting Load | [W/m2] |
| `lighting_control` | Lux threshold at which the lights turn on | [Lx] |
| `lighting_utilisation_factor` | A factor that determines how much natural solar lumminace is effectively utilised in the space
| `lighting_maintenance_factor` | A factor based on how dirty the windows area | - |
| `aw_construction` | Exterior wall construction type (currently unused) | - |
| `shading_device` | Type of shading device for transparent surfaces including windows (currently ununsed) | - |
| `shading_solar_transmittance` | Shading transmittance reduction factor for solar gains (currently ununsed) | - |
| `glass_solar_transmittance` | Solar radiation passing through the window (g-value) | - |
| `glass_solar_shading_transmittance` | Solar radiation passing through the window with active shading devices | - |
| `glass_light_transmittance` | Solar illuminance passing through the window | - |
| `u_windows` | U value of glazed and/or transparent surfaces | [W/m2K] |
| `u_walls` | U value of external walls | [W/m2K] |
| `u_roof` | U value of the roof | [W/m2K] |
| `u_base` | U value of the floor | [W/m2K] |
| `temp_adj_base` | Temperature adjustment factor for the floor | - |
| `temp_adj_walls_ug` | Temperature adjustment factor for walls below ground | - |
| `ach_inf` | Air changes per hour through infiltration [Air Changes Per Hour] | - |
| `ach_win` | Air changes per hour through opened windows [Air Changes Per Hour] | - |
| `ach_vent` | Air changes per hour through ventilation [Air Changes Per Hour] | - |
| `heat_recovery_efficiency` | Efficiency of heat recovery | - |
| `thermal_capacitance` | Thermal capacitance of the building | [J/m2K] |
| `t_set_heating` | Thermal heating set point | [C] |
| `t_start` | Indoor air temperatur for first time step of the simulation | [C] |
| `t_set_cooling` | Thermal cooling set point | [C] |
| `night_flushing_flow` | Air changes per hour through night flushing [Air Changes Per Hour] | - |
| `max_heating_energy_per_floor_area` | Maximum heating load per floor area. Set to no.inf for unrestricted heating | [C] |
| `max_cooling_energy_per_floor_area` | Maximum cooling load. Set to -np.inf for unrestricted cooling | [C] |
| `heating_supply_system` | The type of heating system | - |
| `cooling_supply_system` | The type of cooling system | - |
| `heating_emission_system` | How the heat is distributed/emitted to the building | - |
| `cooling_emission_system` | How the cooling energy is distributed/emitted to the building | - |
| `dhw_system` | Type of hot water generator | - |
