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
        parent: 'upv_modul',
        id: 'upv_modul_poly',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_modul_poly_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_modul_poly_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_modul_poly_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_modul_poly_knowl.html',
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
        name: 'Wafers',
        parent: 'upv_modul',
        id: 'upv_modul_waf',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_modul_waf_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_modul_waf_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_modul_waf_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_modul_waf_knowl.html',
            },
        },
    },
    {
        name: 'Cells',
        parent: 'upv_modul',
        id: 'upv_modul_cell',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_modul_cell_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_modul_cell_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_modul_cell_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_modul_cell_knowl.html',
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
        name: 'Balance of System',
        parent: 'upv',
        id: 'upv_bos',
        info: {
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/upv_bos_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/upv_bos_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/upv_bos_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/upv_bos_knowl.html',
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
        },
    },

    {
        name: 'Wholesale Energy, Supply',
        parent: 'pm',
        id: 'pm_supply',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/pm_supply_overview.html',
            },
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/pm_supply_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/pm_supply_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/pm_supply_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/pm_supply_knowl.html',
            },
        },
    },
    {
        name: 'Transmission & Market Making',
        parent: 'pm',
        id: 'pm_td',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/pm_td_overview.html',
            },
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/pm_td_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/pm_td_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/pm_td_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/pm_td_knowl.html',
            },
        },
    },
    {
        name: 'Load Aggregation',
        parent: 'pm',
        id: 'pm_ld',
        info: {
            overview: {
                name: 'Overview',
                htfile: 'tabcontents/pm_ld_overview.html',
            },
            description: {
                name: 'Descriptive Information',
                htfile: 'tabcontents/pm_ld_descr.html',
            },
            innov: {
                name: 'Innovative Outcomes',
                htfile: 'tabcontents/pm_ld_innov.html',
            },
            strategic: {
                name: 'Strategic Conditions',
                htfile: 'tabcontents/pm_ld_strat.html',
            },
            knowledge: {
                name: 'Knowledge Conditions',
                htfile: 'tabcontents/pm_ld_knowl.html',
            },
        },
    },
];


