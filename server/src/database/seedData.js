export const seedData = {
  users: [
    {
      id: 'usr_admin',
      name: 'Yadhuvanshi',
      email: 'admin@nexuscrm.dev',
      passwordHash: 'pbkdf2:120000:nexuscrm_demo_salt:79af915a25aa7eed05f40a333fc7c2ea511bb6600985067f34ff23d2b0438b68',
      role: 'admin',
      avatar: 'YA',
      createdAt: '2026-08-01T10:00:00.000Z'
    }
  ],
  companies: [
    {
      id: 'cmp_aurora',
      name: 'Aurora Labs',
      domain: 'auroralabs.dev',
      industry: 'SaaS',
      size: '51-200',
      city: 'Bengaluru',
      ownerId: 'usr_admin',
      createdAt: '2026-08-02T10:00:00.000Z',
      updatedAt: '2026-08-02T10:00:00.000Z'
    },
    {
      id: 'cmp_pixel',
      name: 'PixelWave Studio',
      domain: 'pixelwave.design',
      industry: 'Design',
      size: '11-50',
      city: 'Mumbai',
      ownerId: 'usr_admin',
      createdAt: '2026-08-04T10:00:00.000Z',
      updatedAt: '2026-08-04T10:00:00.000Z'
    },
    {
      id: 'cmp_northstar',
      name: 'Northstar Retail',
      domain: 'northstar.store',
      industry: 'Retail',
      size: '201-500',
      city: 'Delhi',
      ownerId: 'usr_admin',
      createdAt: '2026-08-05T10:00:00.000Z',
      updatedAt: '2026-08-05T10:00:00.000Z'
    }
  ],
  contacts: [
    {
      id: 'con_isha',
      name: 'Isha Mehta',
      email: 'isha@auroralabs.dev',
      phone: '+91 98765 12340',
      title: 'Product Manager',
      status: 'warm',
      companyId: 'cmp_aurora',
      ownerId: 'usr_admin',
      tags: ['saas', 'priority'],
      createdAt: '2026-08-05T11:00:00.000Z',
      updatedAt: '2026-08-05T11:00:00.000Z'
    },
    {
      id: 'con_arjun',
      name: 'Arjun Rao',
      email: 'arjun@pixelwave.design',
      phone: '+91 98765 45678',
      title: 'Founder',
      status: 'new',
      companyId: 'cmp_pixel',
      ownerId: 'usr_admin',
      tags: ['design'],
      createdAt: '2026-08-06T12:00:00.000Z',
      updatedAt: '2026-08-06T12:00:00.000Z'
    },
    {
      id: 'con_kavya',
      name: 'Kavya Singh',
      email: 'kavya@northstar.store',
      phone: '+91 98765 98765',
      title: 'Operations Head',
      status: 'hot',
      companyId: 'cmp_northstar',
      ownerId: 'usr_admin',
      tags: ['enterprise', 'retail'],
      createdAt: '2026-08-08T09:00:00.000Z',
      updatedAt: '2026-08-08T09:00:00.000Z'
    }
  ],
  deals: [
    {
      id: 'deal_aurora',
      title: 'Aurora CRM rollout',
      value: 125000,
      stage: 'proposal',
      probability: 65,
      companyId: 'cmp_aurora',
      contactId: 'con_isha',
      expectedCloseDate: '2026-09-15',
      ownerId: 'usr_admin',
      createdAt: '2026-08-06T10:00:00.000Z',
      updatedAt: '2026-08-10T10:00:00.000Z'
    },
    {
      id: 'deal_pixel',
      title: 'PixelWave subscription plan',
      value: 54000,
      stage: 'qualified',
      probability: 45,
      companyId: 'cmp_pixel',
      contactId: 'con_arjun',
      expectedCloseDate: '2026-09-01',
      ownerId: 'usr_admin',
      createdAt: '2026-08-07T10:00:00.000Z',
      updatedAt: '2026-08-11T10:00:00.000Z'
    },
    {
      id: 'deal_northstar',
      title: 'Northstar enterprise onboarding',
      value: 310000,
      stage: 'negotiation',
      probability: 78,
      companyId: 'cmp_northstar',
      contactId: 'con_kavya',
      expectedCloseDate: '2026-09-28',
      ownerId: 'usr_admin',
      createdAt: '2026-08-09T10:00:00.000Z',
      updatedAt: '2026-08-12T10:00:00.000Z'
    }
  ],
  tasks: [
    {
      id: 'tsk_call_aurora',
      title: 'Send proposal follow-up to Isha',
      dueDate: '2026-08-24',
      priority: 'high',
      status: 'open',
      relatedType: 'deal',
      relatedId: 'deal_aurora',
      ownerId: 'usr_admin',
      createdAt: '2026-08-12T10:00:00.000Z',
      updatedAt: '2026-08-12T10:00:00.000Z'
    },
    {
      id: 'tsk_demo_pixel',
      title: 'Schedule product demo with PixelWave',
      dueDate: '2026-08-25',
      priority: 'medium',
      status: 'in-progress',
      relatedType: 'company',
      relatedId: 'cmp_pixel',
      ownerId: 'usr_admin',
      createdAt: '2026-08-12T12:00:00.000Z',
      updatedAt: '2026-08-13T10:00:00.000Z'
    },
    {
      id: 'tsk_contract_north',
      title: 'Prepare final contract notes',
      dueDate: '2026-08-27',
      priority: 'high',
      status: 'open',
      relatedType: 'deal',
      relatedId: 'deal_northstar',
      ownerId: 'usr_admin',
      createdAt: '2026-08-14T10:00:00.000Z',
      updatedAt: '2026-08-14T10:00:00.000Z'
    }
  ],
  notes: [
    {
      id: 'note_1',
      body: 'Aurora is comparing two CRM options. They care about onboarding speed and reporting.',
      relatedType: 'company',
      relatedId: 'cmp_aurora',
      ownerId: 'usr_admin',
      createdAt: '2026-08-10T10:00:00.000Z'
    },
    {
      id: 'note_2',
      body: 'Northstar wants a detailed activity timeline before final approval.',
      relatedType: 'deal',
      relatedId: 'deal_northstar',
      ownerId: 'usr_admin',
      createdAt: '2026-08-12T10:00:00.000Z'
    }
  ],
  activities: [
    {
      id: 'act_1',
      type: 'deal.updated',
      message: 'Northstar deal moved to negotiation',
      ownerId: 'usr_admin',
      createdAt: '2026-08-12T09:30:00.000Z'
    },
    {
      id: 'act_2',
      type: 'contact.created',
      message: 'Kavya Singh was added as a contact',
      ownerId: 'usr_admin',
      createdAt: '2026-08-08T09:00:00.000Z'
    }
  ]
};
