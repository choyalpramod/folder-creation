export const hierarchi = {
    'root': {
        key: 'root',
        teamName: 'Company',
        personName: 'Owner',
        designation: '',
        children: ['ceo0']
    },
    'ceo0': {
        key: 'ceo0',
        teamName: 'Rentomojo',
        personName: 'Gaurav',
        designation: 'CEO',
        // children: ['cko0', 'cfo0', 'ea0', 'vpkyc0']        
        children: ['cko0', 'cfo0', 'ea0', 'vpkyc0','vpkyctest0']        
    },
    'cko0': {
        key: 'cko0',
        teamName: 'Core Management',
        personName: 'Hazel Turner',
        designation: 'CKO',
        children: ['cc0','cc1','cc2']        
    },
    'cc0': {
        key: 'cc0',
        teamName: 'Customer Support',
        personName: 'Mary',
        designation: 'CC',
        children: []        
    },
    'cc1': {
        key: 'cc1',
        teamName: 'Customer Support',
        personName: 'Charles',
        designation: 'CC',
        children: []        
    },
    'cc2': {
        key: 'cc2',
        teamName: 'Customer Support',
        personName: 'Harry',
        designation: 'CC',
        children: []        
    },
    
    'cfo0': {
        key: 'cfo0',
        teamName: 'Core Management',
        personName: 'Elia Andre',
        designation: 'CFO',
        children: ['finance0','finance1']        
    },
    'finance0': {
        key: 'finance0',
        teamName: 'Finance Team',
        personName: 'Tom',
        designation: 'Finance',
        children: []        
    },
    'finance1': {
        key: 'finance1',
        teamName: 'Finance Team',
        personName: 'Cherry',
        designation: 'Finance',
        children: []        
    },

    'ea0': {
        key: 'ea0',
        teamName: 'Core Management',
        personName: 'Anita Wilson',
        designation: 'EA',
        children: ['qa0','qa1','qa2','qa3']        
    },
    'qa0': {
        key: 'qa0',
        teamName: 'Quality Assurance',
        personName: 'Mohit',
        designation: 'Automation',
        children: []        
    },
    'qa1': {
        key: 'qa1',
        teamName: 'Quality Assurance',
        personName: 'Lahri',
        designation: 'Automation',
        children: []        
    },
    'qa2': {
        key: 'qa2',
        teamName: 'Quality Assurance',
        personName: 'Teena',
        designation: 'Automation',
        children: []        
    },
    'qa3': {
        key: 'qa3',
        teamName: 'Quality Assurance',
        personName: 'Shruti',
        designation: 'Automation',
        children: []        
    },

    'vpkyc0': {
        key: 'vpkyc0',
        teamName: 'KYC',
        personName: 'Willi Steward',
        designation: 'VP KYC',
        children: ['be0','be1']  
    },
    'be0': {
        key: 'be0',
        teamName: 'Backend Team',
        personName: 'Ruchita',
        designation: 'Backend',
        children: []        
    },
    'be1': {
        key: 'be1',
        teamName: 'Backend Team',
        personName: 'Ayush',
        designation: 'Backend',
        children: []        
    },

    'vpkyctest0': {
        key: 'vpkyctest0',
        teamName: 'VP',
        personName: 'Willi Steward 2',
        designation: 'VP',
        children: ['fe0','fe1']  
    },
    'fe0': {
        key: 'fe0',
        teamName: 'Frontend Team',
        personName: 'Pramod',
        designation: 'Frontend',
        children: ['jfe0']        
    },
    'jfe0': {
        key: 'jfe0',
        teamName: 'Frontend Team',
        personName: 'Hiten',
        designation: 'Junior Frontend',
        children: []        
    },
    'fe1': {
        key: 'fe1',
        teamName: 'Frontend Team',
        personName: 'Kavita',
        designation: 'Frontend',
        children: []        
    },
    
}

export const hierarchiRootKey = 'root';