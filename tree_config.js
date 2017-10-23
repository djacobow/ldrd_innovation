var indata = [
    {
        name: 'Home',
        id: 'top',
        info: {
            overview: {
                name: 'This is the overall overview',
                htfile: 'tabcontents/top_overview.html',
            }
        }
    },

    {
        name: 'Generation',
        id: 'gen',
        parent: 'top',
        info: {
            overview: {
                name: 'This is the overall overview',
                htfile: 'tabcontents/gen_overview.html',
            }
        }
    },

   
    {
        name: 'Natural Gas',
        id: 'ng',
        parent: 'gen',
        info: {
            overview: {
                name: 'This is the overall overview',
                htfile: 'tabcontents/gas_overview.html',
            }
        }
    },


    {
        name: 'Natural Gas Power Plants',
        parent: 'ng',
        id: 'ngcc',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/ngcc_overview.html',
            }
        },
    },
    {
        name: 'Steam Generator & Condenser',
        parent: 'ngcc',
        id: 'ngcc_sgc',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngcc_sgc_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngcc_sgc_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngcc_sgc_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngcc_sgc_knowl.html',
            },
        },
    },
    {
        name: 'Turbine & Generator',
        parent: 'ngcc',
        id: 'ngcc_turb',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngcc_turb_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngcc_turb_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngcc_turb_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngcc_turb_knowl.html',
            },
        },
    },
    {
        name: 'Balance of Plant',
        parent: 'ngcc',
        id: 'ngcc_bos',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngcc_bos_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngcc_bos_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngcc_bos_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngcc_bos_knowl.html',
            },
        },
    },
    {
        name: 'Engineering, Procurement, & Construction',
        parent: 'ngcc',
        id: 'ngcc_epc',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngcc_epc_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngcc_epc_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngcc_epc_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngcc_epc_knowl.html',
            },
        },
    },
    {
        name: 'Operations',
        parent: 'ngcc',
        id: 'ngcc_ops',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngcc_ops_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngcc_ops_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngcc_ops_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngcc_ops_knowl.html',
            },
        },
    },







    {
        name: 'Natural Gas Fuel',
        parent: 'ng',
        id: 'ngf',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/ngf_overview.html',
            }
        },
    },
    {
        name: 'Exploration',
        parent: 'ngf',
        id: 'ngf_exp',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngf_exp_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngf_exp_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngf_exp_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngf_exp_knowl.html',
            },
        },
    },
    {
        name: 'Extraction',
        parent: 'ngf',
        id: 'ngf_ext',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngf_ext_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngf_ext_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngf_ext_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngf_ext_knowl.html',
            },
        },
    },
    {
        name: 'Tranport & Storage',
        parent: 'ngf',
        id: 'ngcc_trans',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngf_trans_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngf_trans_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngf_trans_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngf_trans_knowl.html',
            },
        },
    },
    {
        name: 'Operations',
        parent: 'ngf',
        id: 'ngf_ops',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/ngf_ops_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/ngf_ops_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/ngf_ops_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/ngf_ops_knowl.html',
            },
        },
    },










    {
        name: 'Utility-Scale Photovoltaics',
        parent: 'gen',
        id: 'upv',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/upv_overview.html',
            }
        },
    },
    {
        name: 'Polysilicon',
        parent: 'upv',
        id: 'upv_poly',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_poly_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_poly_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_poly_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_poly_knowl.html',
            },
        },
    },
    {
        name: 'Wafers',
        parent: 'upv',
        id: 'upv_waf',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_waf_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_waf_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_waf_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_waf_knowl.html',
            },
        },
    },
    {
        name: 'Cells',
        parent: 'upv',
        id: 'upv_cell',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_cell_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_cell_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_cell_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_cell_knowl.html',
            },
        },
    },
    {
        name: 'Modules',
        parent: 'upv',
        id: 'upv_modul',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_modul_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_modul_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_modul_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_modul_knowl.html',
            },
        },
    },
    {
        name: 'Inverters',
        parent: 'upv',
        id: 'upv_inv',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_inv_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_inv_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_inv_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_inv_knowl.html',
            },
        },
    },
    {
        name: 'Project Development',
        parent: 'upv',
        id: 'upv_dev',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_dev_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_dev_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_dev_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_dev_knowl.html',
            },
        },
    },
    {
        name: 'Engineering, Procurement, & Construction',
        parent: 'upv',
        id: 'upv_epc',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_epc_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_epc_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_epc_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_epc_knowl.html',
            },
        },
    },
    {
        name: 'Operations',
        parent: 'upv',
        id: 'upv_ops',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_ops_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_ops_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_ops_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_ops_knowl.html',
            },
        },
    },









    {
        name: 'Onshore Wind',
        parent: 'gen',
        id: 'wind',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/wind_overview.html',
            }
        },
    },
   
    {
        name: 'Turbine Manufacture',
        parent: 'wind',
        id: 'wind_turb',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_turb_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_turb_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_turb_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_turb_knowl.html',
            },
        },
    },

    {
        name: 'Rotors and Blades',
        parent: 'wind_turb',
        id: 'wind_turb_blad',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_blad_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_blad_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_blad_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_blad_knowl.html',
            },
        },
    },
    {
        name: 'Nacelle',
        parent: 'wind_turb',
        id: 'wind_turb_nac',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_nac_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_nac_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_nac_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_nac_knowl.html',
            },
        },
    },
    {
        name: 'Tower',
        parent: 'wind_turb',
        id: 'wind_turb_twr',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_twr_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_twr_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_twr_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_twr_knowl.html',
            },
        },
    },
    {
        name: 'Project Development',
        parent: 'wind',
        id: 'wind_prj',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_prj_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_prj_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_prj_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_prj_knowl.html',
            },
        },
    },
    {
        name: 'Delivery',
        parent: 'wind',
        id: 'wind_deliv',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_deliv_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_deliv_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_deliv_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_deliv_knowl.html',
            },
        },
    },
    {
        name: 'Construction',
        parent: 'wind',
        id: 'wind_cons',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_cons_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_cons_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_cons_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_cons_knowl.html',
            },
        },
    },
    {
        name: 'Operations',
        parent: 'wind',
        id: 'wind_ops',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/wind_ops_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/wind_ops_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/wind_ops_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/wind_ops_knowl.html',
            },
        },
    },






    {
        name: 'Power Markets (USA)',
        parent: 'top',
        id: 'pm',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/pm_overview.html',
            },
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/pm_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/pm_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/pm_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/pm_knowl.html',
            },
        },
    },
];







//
// --- junk below here
//

var old_tree = [
 // Residential PV
 { name: 'Solar - Residential PV',
   id: 'rpv',
   info: {
       descr: {
           name: 'Description',
           htfile: 'examples/rpv_descr.html',
       },
       comp: {
           name: 'Competition',
           data: 'HHI: 123, blah',
       },
       ip: {
           name: 'Patents',
           jsfile: 'examples/rpv_patents.json',
       },
       value: {
           name: 'Value Share',
           htfile: 'examples/rpv_val.html',
       }
   },
 },
 { name: 'Technology',
   id: 'rpv_tech',
   parent: 'rpv',
   info: {
       descr: {
           name: 'Description',
           htfile: 'examples/rpv_descr.html',
       },
       comp: {
           name: 'Competition',
           data: 'HHI: 123, blah',
       },
       ip: {
           name: 'Patents',
           data: 'blee patents',
       },
       value: {
           name: 'Foo Bar Value Share',
           htfile: 'examples/example.html',
       },
       bleep: {
           name: 'Bleep',
           htfile: 'examples/example2.html',
       }
   },
 },
 { name: 'Module',
   id: 'rpv_tech_module',
   parent: 'rpv_tech',
 },
 { name: 'Silicon',
   id: 'rpv_tech_module_si',
   parent: 'rpv_tech_module'
 },
 { name: 'Wafer',
   id: 'rpv_tech_module_wafer',
   parent: 'rpv_tech_module'
 },
 { name: 'Module',
   id: 'rpv_tech_module_module',
   parent: 'rpv_tech_module',
 },
 { name: 'Inverter',
   id: 'rpv_tech_inverter',
   parent: 'rpv_tech'
 },
 { name: 'Semiconductors',
   id: 'rpv_inverter_semiconductors',
   parent: 'rpv_tech_inverter',
 },
 { name: 'Printed Circuit Boards',
   id: 'rpv_techi_inverter_pcb',
   parent: 'rpv_tech_inverter',
 },
 { name: 'Other Components',
   id: 'rpv_tech_inverter_other',
   parent: 'rpv_tech_inverter',
 },
 { name: 'Assembly',
   id: 'rpv_tech_inverter_assembly',
   parent: 'rpv_tech_inverter',
 },
 { name: 'Installation',
   id: 'rpv_install',
   parent: 'rpv'
 },
 { name: 'Labor',
   id: 'rpv_install_labor',
   parent: 'rpv_install',
 },
 { name: 'Permitting',
   id: 'rpv_install_permitting',
   parent: 'rpv_install',
 },
 { name: 'Interconnection',
   id: 'rpv_install_connection',
   parent: 'rpv_install',
 },
 { name: 'Inspection',
   id: 'rpv_install_inspection',
   parent: 'rpv_install',
 },
 { name: 'Balance of System',
   id: 'rpv_bos',
   parent: 'rpv',
 },
 { name: 'Wire',
   id: 'rpv_bos_wire',
   parent: 'rpv_bos',
 },
 { name: 'Conduit',
   id: 'rpv_bos_conduit',
   parent: 'rpv_bos',
 },
 { name: 'Racking',
   id: 'rpv_bos_racking',
   parent: 'rpv_bos',
 },
 { name: 'Finance',
   id: 'rpv_finance',
   parent: 'rpv',
 },



 // Utility PV
 { name: 'Solar - Utility Scale PV',
   id: 'upv',
 },
 { name: 'Technology',
   id: 'upv_tech',
   parent: 'upv',
 },
 { name: 'Solar Module',
   id: 'upv_tech_module',
   parent: 'upv_tech',
 },
 { name: 'Silicon',
   id: 'upv_tech_module_si',
   parent: 'upv_tech_module',
 },
 { name: 'Wafers',
   id: 'upv_tech_module_wafer',
   parent: 'upv_tech_module',
 },
 { name: 'Cells',
   id: 'upv_tech_module_cell',
   parent: 'upv_tech_module',
 },
 { name: 'Module',
   id: 'upv_tech_module_module',
   parent: 'upv_tech_module',
 },
 { name: 'Inverter',
   id: 'upv_tech_inverter',
   parent: 'upv_tech',
 },
 { name: 'Project Development',
   id: 'upv_proj',
   parent: 'upv',
 },
 { name: 'Engineering',
   id: 'upv_proj_engineering',
   parent: 'upv_proj',
 },
 { name: 'Procurement',
   id: 'upv_proj_procurement',
   parent: 'upv_proj',
 },
 { name: 'Construction',
   id: 'upv_proj_construction',
   parent: 'upv_proj',
 },
 { name: 'Installation',
   id: 'upv_proj_construction_installation',
   parent: 'upv_proj_construction',
 },
 { name: 'Independent Power Producer',
   id: 'upv_ipp',
   parent: 'upv',
 },
 { name: 'Power Markets',
   id: 'upv_pm',
   parent: 'upv',
 },
 { name: 'Utility / Transmission Owner',
   id: 'upv_pm_util',
   parent: 'upv_pm',
 },


 // Everything Wind
 { name: 'Wind Power',
   id: 'wp',
 },
 { name: 'Technology',
   id: 'wp_tech',
   parent: 'wp',
 },
 { name: 'Rotors / Blades',
   id: 'wp_tech_blades',
   parent: 'wp_tech',
 },
 { name: 'Drive Train',
   id: 'wp_tech_drivetrain',
   parent: 'wp_tech',
 },
 { name: 'Nacelle Module',
   id: 'wp_tech_nacelle',
   parent: 'wp_tech',
 },
 { name: 'Tower Module',
   id: 'wp_tech_tower',
   parent: 'wp_tech',
 },
 { name: 'Balance of System',
   id: 'wp_bos',
   parent: 'wp',
 },
 { name: 'Project Development',
   id: 'wp_project',
   parent: 'wp',
 },
 { name: 'Procurement',
   id: 'wp_procurement',
   parent: 'wp',
 },
 { name: 'Site Assessment',
   id: 'wp_procurement_site',
   parent: 'wp_procurement',
 },
 { name: 'Permitting',
   id: 'wp_procurement_permitting',
   parent: 'wp_procurement',
 },
 { name: 'Staging',
   id: 'wp_procurement_staging',
   parent: 'wp_procurement',
 },
 { name: 'Generator',
   id: 'wp_generator',
   parent: 'wp',
 },
 { name: 'Independent Power Producer',
   id: 'wp_generator_ipp',
   parent: 'wp_generator',
 },
 { name: 'Power Markets',
   id: 'wp_pm',
   parent: 'wp',
 },
 { name: 'Utility',
   id: 'wp_pm_utility',
   parent: 'wp_pm',
 },

 // Everything Coal
 { name: 'Coal Plant',
   id: 'coal',
 },

];
