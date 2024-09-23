export const apiData = {
    expand: "schema,names",
    startAt: 0,
    maxResults: 50,
    total: 129,
    issues: [
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132326",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132326",
            key: "STAR-62262",
            fields: {
                summary: "Code Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "132075",
                    key: "STAR-62027",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132075",
                    fields: {
                        summary: "Change in Cumulative Bonus",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10379",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "DEV COMPLETED",
                            id: "10379",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                            name: "High",
                            id: "2",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-13T14:18:05.172+0530",
                description: "Code Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                    accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                    emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                    },
                    displayName: "Abhishek Kalwaghe",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132326/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T14:18:43.926+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132287",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132287",
            key: "STAR-62225",
            fields: {
                summary: "Data push from DL to FM SQL DB :- AGG_FM_POLICY_INFO_DAILY",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                    id: "10003",
                    description: "A small, distinct piece of work.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                    name: "Task",
                    subtask: false,
                    avatarId: 10318,
                    hierarchyLevel: 0,
                },
                created: "2024-09-13T12:12:39.592+0530",
                description:
                    "Dear Team,\n\nYesterday we add the new column for ΓÇÿBranch codeΓÇÖ in AGG_FM_POLICY_INFO_DAILY. Yesterday its run as full refresh.  We need to load the full table data into *ΓÇÿPLCY_INFO_OLDΓÇÖ*\n\n\n\nPlease use the below Query :- \n\nselect PLCY_NO,             AGNT_NO,             CURR_SI,             LAST_CLM_ADM_DT,             LAST_CLM_DISCHARGE_DT,             LAST_CLM_HLTH_CARD_NO,             LAST_CLM_HOSP_CD,             LAST_CLM_NO,             NO_OF_INSRD,             PLCY_BRK_PERIOD,             PLCY_BRK_SINCE_INCEPTION,             PLCY_CTGRY,             PLCY_EFFECTIVE_DT,             PLCY_EXP_DT,             PLCY_FRST_INCEPTION_DT,             PLCY_ICR,  PLCY_INF_DISEASE_CLM_CNT,           PLCY_ISSUING_CITY,             PLCY_ISSUING_PORTAL,             PLCY_PIN_CD,             PLCY_PROD_CD,             PLCY_PROD_NM,             PLCY_PROD_TYP,             PORTING_DT,             PORTING_IND,             PRE_EXAM_AT_NWLAB AS PRE_EXAM_AT_NWLAB_IND,             PREV_INSURER_CNT,             PREV_PLCY_EXP_DT,             PREV_SI,             PROPOSER_MAIL_ID,             PROPOSER_MOBILE_NO,             PROPOSER_NM,             PURCHASE_TYP,             RENEWAL_DT,             RENEWAL_IND,             SI_EXHAUSTED_DT,             SI_EXHAUSTED_IND,             PLCY_SUB_CTGRY,             Balanced_SI AS PREV_PLCY_BALANCE_SI,             GT2_INF_DISEASE_CLM_YEAR AS GT2_INF_DISEASE_CLM_YR,             SUSP_PLCY_IND,             BUSINESS_TYP,             DIGITAL_STP_IND,             PROPOSER_CLUSTER_ID,             DOC_REMARKS,             MEMBER_NAME_INVESTIGATED,             REJ_PROPOSAL_NO,             PROPOSER_INCOME,             PREV_LAST_CLM_ADM_DT,             PREV_LAST_CLM_DISCHARGE_DT,             PREV_LAST_CLM_HLTH_CARD_NO,             PREV_LAST_CLM_HOSP_CD,             PREV_LAST_CLM_NO,             PIN_CTGRY,Reported_Date AS SNAPSHOT_DTTM,             LOAD_TIMESTAMP AS PROCESSED_DTTM,             ENDORSEMENT_DT,             ENDORSEMENT_IND,             INCLUSION_DT,             INCLUSION_IND,             PLCY_PRTN, SM_CODE, BRANCH_CODE             from prod_view.reporting_tables.agg_fm_policy_info where  CAST(PLCY_EXP_DT AS DATE) >= '2024-01-01' OR\n EXISTS (SELECT 1 FROM PRODUCTION.reporting_tables.agg_claim_header_data WHERE POLICY_NUMBER = PLCY_NO);",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                    accountId: "63fcb5120a4a47fb8d20eaea",
                    emailAddress: "gorantla.venubabu@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                    },
                    displayName: "VENU BABU GORANTLA",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: ["Datalake"],
                duedate: "2024-09-14",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132287/comment/209384",
                            id: "209384",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: 'Hi [~accountid:63fcb5120a4a47fb8d20eaea] Table loaded in sql server\n\n!image-20240913-100914.png|width=408,height=255,alt="image-20240913-100914.png"!\n\n!image-20240913-100954.png|width=1609,height=1118,alt="image-20240913-100954.png"!',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T15:40:01.991+0530",
                            updated: "2024-09-13T15:40:01.991+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132287/comment/209700",
                            id: "209700",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Ok",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-14T15:05:54.309+0530",
                            updated: "2024-09-14T15:05:54.309+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132287/comment/209701",
                            id: "209701",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Ok",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-14T15:06:03.363+0530",
                            updated: "2024-09-14T15:06:03.363+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132287/comment/209702",
                            id: "209702",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "OK",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-14T15:06:14.346+0530",
                            updated: "2024-09-14T15:06:14.346+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132287/comment/209703",
                            id: "209703",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "ok",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-14T15:06:30.683+0530",
                            updated: "2024-09-14T15:06:30.683+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132287/comment",
                    maxResults: 5,
                    total: 5,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                    accountId: "63fcb5120a4a47fb8d20eaea",
                    emailAddress: "gorantla.venubabu@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                    },
                    displayName: "VENU BABU GORANTLA",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-14T15:06:35.244+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/6",
                    description:
                        "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/closed.png",
                    name: "Closed",
                    id: "6",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132271",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132271",
            key: "STAR-62209",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "132194",
                    key: "STAR-62134",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132194",
                    fields: {
                        summary: "Column addition in Renewal Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10000",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "Backlog",
                            id: "10000",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-13T11:57:07.363+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ad92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    accountId: "712020:d92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    emailAddress: "v.minakshibastapure@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                    },
                    displayName: "v.minakshibastapure",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132271/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T13:11:12.278+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132268",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132268",
            key: "STAR-62206",
            fields: {
                summary: "Solution Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "132194",
                    key: "STAR-62134",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132194",
                    fields: {
                        summary: "Column addition in Renewal Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10000",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "Backlog",
                            id: "10000",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-13T11:56:30.539+0530",
                description: "Solution Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ad92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    accountId: "712020:d92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    emailAddress: "v.minakshibastapure@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                    },
                    displayName: "v.minakshibastapure",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132268/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132268/worklog/43738",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T13:10:56.065+0530",
                            updated: "2024-09-13T13:10:56.065+0530",
                            started: "2024-09-13T12:10:50.292+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43738",
                            issueId: "132268",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T13:10:56.079+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132267",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132267",
            key: "STAR-62205",
            fields: {
                summary: "Requirement Gathering",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "132194",
                    key: "STAR-62134",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132194",
                    fields: {
                        summary: "Column addition in Renewal Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10000",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "Backlog",
                            id: "10000",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-13T11:56:19.415+0530",
                description: "Requirement Gathering",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ad92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    accountId: "712020:d92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    emailAddress: "v.minakshibastapure@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                    },
                    displayName: "v.minakshibastapure",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132267/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132267/worklog/43735",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T13:07:13.221+0530",
                            updated: "2024-09-13T13:07:13.221+0530",
                            started: "2024-09-13T12:07:08.396+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43735",
                            issueId: "132267",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T13:07:30.628+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132194",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132194",
            key: "STAR-62134",
            fields: {
                summary: "Column addition in Renewal Master",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-12T17:47:44.281+0530",
                description:
                    "Please find below the link for the latest SSM of the aggregate agg_renewal_mart_daily\n\n[https://starhealthinsurance.atlassian.net/wiki/spaces/DL/pages/27951107/Policy+Renewal|https://starhealthinsurance.atlassian.net/wiki/spaces/DL/pages/27951107/Policy+Renewal|smart-link] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                    accountId: "63045b8b75b5bbf5e3171702",
                    emailAddress: "arnesh.chopra@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                    },
                    displayName: "arnesh.chopra",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132194/comment/208925",
                            id: "208925",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "cc: [~accountid:62f0a96b48e310e672970057] [~accountid:6399b7a9abc764d2ca5f3984] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T17:48:10.787+0530",
                            updated: "2024-09-12T17:48:10.787+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132194/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ad92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    accountId: "712020:d92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    emailAddress: "v.minakshibastapure@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                    },
                    displayName: "v.minakshibastapure",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-13T10:18:25.052+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10000",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Backlog",
                    id: "10000",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132192",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132192",
            key: "STAR-62132",
            fields: {
                summary: "Column addition in Proposal Master ",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-12T17:46:13.427+0530",
                description:
                    "Please find the below link for the latest SSM for the aggregate agg_proposal_master_daily\n\n[https://starhealthinsurance.atlassian.net/wiki/spaces/DL/pages/102662150/Proposal+master|https://starhealthinsurance.atlassian.net/wiki/spaces/DL/pages/102662150/Proposal+master|smart-link] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                    accountId: "63045b8b75b5bbf5e3171702",
                    emailAddress: "arnesh.chopra@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                    },
                    displayName: "arnesh.chopra",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-17",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132192/comment/208924",
                            id: "208924",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "cc: [~accountid:6399b7a9abc764d2ca5f3984] [~accountid:62f0a96b48e310e672970057] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T17:48:00.965+0530",
                            updated: "2024-09-12T17:48:00.965+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132192/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ad92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    accountId: "712020:d92c5abd-1b3b-4f8f-b9dd-5d38f79adb0c",
                    emailAddress: "v.minakshibastapure@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/2e5d73df47c809fa63636653c20d5d5e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-4.png",
                    },
                    displayName: "v.minakshibastapure",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T18:40:01.634+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10606",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "In Dev",
                    id: "10606",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132187",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132187",
            key: "STAR-62129",
            fields: {
                summary: "Column addition in Policy Master",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-12T17:34:03.686+0530",
                description:
                    "Please refer the latest SSM for policy_master for the logic of the new column addition\n\n[https://starhealthinsurance.atlassian.net/wiki/spaces/DL/pages/28409869/Policy+Master|https://starhealthinsurance.atlassian.net/wiki/spaces/DL/pages/28409869/Policy+Master|smart-link] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                    accountId: "63045b8b75b5bbf5e3171702",
                    emailAddress: "arnesh.chopra@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                    },
                    displayName: "arnesh.chopra",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132187/comment/208914",
                            id: "208914",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "cc: [~accountid:6399b7a9abc764d2ca5f3984] [~accountid:62f0a96b48e310e672970057] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T17:44:24.591+0530",
                            updated: "2024-09-12T17:44:24.591+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132187/comment/208936",
                            id: "208936",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8e6acf9eeb443dbf0b] - There are 3 small stories ( the other 2 are [https://starhealthinsurance.atlassian.net/browse/STAR-62132|https://starhealthinsurance.atlassian.net/browse/STAR-62132|smart-link] and [https://starhealthinsurance.atlassian.net/browse/STAR-62134|https://starhealthinsurance.atlassian.net/browse/STAR-62134|smart-link]  which are similar. These can be done quickly.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T17:59:28.377+0530",
                            updated: "2024-09-12T18:02:18.738+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132187/comment",
                    maxResults: 2,
                    total: 2,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                    accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                    emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                    },
                    displayName: "Abhishek Kalwaghe",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-13T18:04:24.880+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10000",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Backlog",
                    id: "10000",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132182",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132182",
            key: "STAR-62124",
            fields: {
                summary: "Create dynamic table for given attachment",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                    id: "10003",
                    description: "A small, distinct piece of work.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                    name: "Task",
                    subtask: false,
                    avatarId: 10318,
                    hierarchyLevel: 0,
                },
                created: "2024-09-12T17:21:02.106+0530",
                description:
                    "*Details :* \n\nPlease below attachment for creating dynamic table :\n\n# Table name : TARGET_FOR_GOAT [^TARGET_FOR_GOAT.csv] \n# Table name : ZONE_MASTER_FOR_GOAT [^ZONE_MASTER_FOR_GOAT.csv] \n# Table name : {{banca_alternate_intermediary}} [^BANCA_ALTER_CODES.xlsx] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8d4c25135b9720e717",
                    accountId: "63045b8d4c25135b9720e717",
                    emailAddress: "monisha.b@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                    },
                    displayName: "monisha.b",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                    name: "High",
                    id: "2",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132182/comment/209268",
                            id: "209268",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8d4c25135b9720e717] \n\nExternal tables and views created in production and prod_view catalog respectively in dimension schema.\nKindly check",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T13:08:48.156+0530",
                            updated: "2024-09-13T13:08:48.156+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132182/comment/209308",
                            id: "209308",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8d4c25135b9720e717",
                                accountId: "63045b8d4c25135b9720e717",
                                emailAddress: "monisha.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                },
                                displayName: "monisha.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6] Ok.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8d4c25135b9720e717",
                                accountId: "63045b8d4c25135b9720e717",
                                emailAddress: "monisha.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                                },
                                displayName: "monisha.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T14:22:59.882+0530",
                            updated: "2024-09-13T14:22:59.882+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132182/comment",
                    maxResults: 2,
                    total: 2,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8d4c25135b9720e717",
                    accountId: "63045b8d4c25135b9720e717",
                    emailAddress: "monisha.b@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/28f3c6465d3e8d24df6cbbdb02f43b97?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-0.png",
                    },
                    displayName: "monisha.b",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132182/worklog/43736",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T13:08:59.263+0530",
                            updated: "2024-09-13T13:08:59.263+0530",
                            started: "2024-09-13T11:08:52.834+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43736",
                            issueId: "132182",
                        },
                    ],
                },
                updated: "2024-09-13T14:22:59.882+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10379",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "DEV COMPLETED",
                    id: "10379",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "132164",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132164",
            key: "STAR-62107",
            fields: {
                summary: "Requirement Gathering",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131913",
                    key: "STAR-61884",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131913",
                    fields: {
                        summary: "Wellness CMP with DL Integration",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10001",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "Selected for Development",
                            id: "10001",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-12T16:52:29.987+0530",
                description: "Requirement Gathering",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/132164/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-12T16:52:30.593+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131977",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131977",
            key: "STAR-61938",
            fields: {
                summary: "Post Deployment Validation",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131577",
                    key: "STAR-61596",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131577",
                    fields: {
                        summary:
                            "Separate SQL tables for non-fraud rules in Decision Management System",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10379",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "DEV COMPLETED",
                            id: "10379",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-12T10:24:46.734+0530",
                description: "Post Deployment Validation",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131977/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-12T10:24:47.375+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131976",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131976",
            key: "STAR-61937",
            fields: {
                summary: "Deployment",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131577",
                    key: "STAR-61596",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131577",
                    fields: {
                        summary:
                            "Separate SQL tables for non-fraud rules in Decision Management System",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10379",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "DEV COMPLETED",
                            id: "10379",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-12T10:23:42.823+0530",
                description: "Deployment",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131976/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-12T10:23:43.397+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131975",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131975",
            key: "STAR-61936",
            fields: {
                summary: "Deployment Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131577",
                    key: "STAR-61596",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131577",
                    fields: {
                        summary:
                            "Separate SQL tables for non-fraud rules in Decision Management System",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10379",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "DEV COMPLETED",
                            id: "10379",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-12T10:23:17.068+0530",
                description: "Deployment Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131975/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-12T10:23:17.611+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131971",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131971",
            key: "STAR-61932",
            fields: {
                summary: "Solution Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131900",
                    key: "STAR-61876",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131900",
                    fields: {
                        summary:
                            "Notification component - Automated emails with data in dynamic table",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10606",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "In Dev",
                            id: "10606",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-12T10:13:42.894+0530",
                description: "Solution Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131971/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131971/worklog/43716",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T10:13:53.794+0530",
                            updated: "2024-09-13T10:13:53.794+0530",
                            started: "2024-09-12T08:14:00.000+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43716",
                            issueId: "131971",
                        },
                    ],
                },
                updated: "2024-09-13T10:13:53.809+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/3",
                    description:
                        "This issue is being actively worked on at the moment by the assignee.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/inprogress.png",
                    name: "In Progress",
                    id: "3",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131970",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131970",
            key: "STAR-61931",
            fields: {
                summary: "Requirement Gathering",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131900",
                    key: "STAR-61876",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131900",
                    fields: {
                        summary:
                            "Notification component - Automated emails with data in dynamic table",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10606",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "In Dev",
                            id: "10606",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-12T10:13:18.326+0530",
                description: "Requirement Gathering",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131970/comment/208349",
                            id: "208349",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Table in email content\n\n* New Template will be provided for this requirement\n* Template Info - A list of records to be sent.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T10:17:33.903+0530",
                            updated: "2024-09-12T10:17:33.903+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131970/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131970/worklog/43662",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            comment: "Requirement Gathering",
                            created: "2024-09-12T10:14:22.049+0530",
                            updated: "2024-09-12T10:14:22.049+0530",
                            started: "2024-09-11T09:14:00.000+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43662",
                            issueId: "131970",
                        },
                    ],
                },
                updated: "2024-09-12T10:17:42.485+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131964",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131964",
            key: "STAR-61925",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131394",
                    key: "STAR-61422",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394",
                    fields: {
                        summary: "Adding branch code to agg_fm_policy_info",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-12T09:59:17.507+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131964/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131964/worklog/43733",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:26:07.462+0530",
                            updated: "2024-09-13T12:26:07.462+0530",
                            started: "2024-09-13T11:26:00.479+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43733",
                            issueId: "131964",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T12:54:02.251+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131913",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131913",
            key: "STAR-61884",
            fields: {
                summary: "Wellness CMP with DL Integration",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-11T17:01:16.887+0530",
                description:
                    "Dear Team,\n\nWe are going to provide the data from DL to Wellness CMP portal using AWS s3 bucket.\n\nFile Extraction details:\n\n# Csv file format with ~ delimiter symbol.\n# Frequency - Daily basis\n# File Name : Campaign1_Daily_yyyy_mm_dd.csv\n# Please maintain last 25 days file in AWS s3 bucket.\n\n*AWS S3 Bucket :* \n\nS3 Bucket: wellness-cmp-services-file-upload-prod\nFolder: DataLake/\n\nUser : dl-team\n\nFurther information, we are creating the view for product list testing purpose. \n\n{{stardlops.default.wellness_cmp_products}} \n\nPlease create the same view on prod_view or production for our development. Master should be flexible to add or inactive the product.\n\nPlease find the SSM reference link.\n\n[https://starhealthinsurance.atlassian.net/wiki/spaces/DE/pages/763625477/Wellness+CMP|https://starhealthinsurance.atlassian.net/wiki/spaces/DE/pages/763625477/Wellness+CMP|smart-link] \n\nAWS s3 bucket POC :\n\n[https://starhealthinsurance.atlassian.net/browse/STAR-53443|https://starhealthinsurance.atlassian.net/browse/STAR-53443|smart-link] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b25abc07e51c73358",
                    accountId: "62f0a96b25abc07e51c73358",
                    emailAddress: "prakash.a@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/4d587fe4d7883745e61d8255746552e4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPA-3.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/4d587fe4d7883745e61d8255746552e4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPA-3.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/4d587fe4d7883745e61d8255746552e4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPA-3.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/4d587fe4d7883745e61d8255746552e4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPA-3.png",
                    },
                    displayName: "Prakash A",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131913/comment/208276",
                            id: "208276",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:62f0a96b25abc07e51c73358] - Please upload the SSM on Confluence by creating a new sub-page 'Wellness' under [BLUEPRINT - Data Engineering - Confluence (atlassian.net)|https://starhealthinsurance.atlassian.net/wiki/spaces/DE/pages/25821195/BLUEPRINT] and share that link here.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T18:24:12.482+0530",
                            updated: "2024-09-11T18:24:12.482+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131913/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A558ce5ec-ceda-4dbf-b57b-052480f25d9f",
                    accountId: "712020:558ce5ec-ceda-4dbf-b57b-052480f25d9f",
                    emailAddress: "v.abhishekkumar@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                    },
                    displayName: "v.abhishekkumar",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T10:48:59.199+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10001",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Selected for Development",
                    id: "10001",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131900",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131900",
            key: "STAR-61876",
            fields: {
                summary:
                    "Notification component - Automated emails with data in dynamic table",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "89042",
                    key: "STAR-45508",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/89042",
                    fields: {
                        summary: "Notification component in Data Lake",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/3",
                            description:
                                "This issue is being actively worked on at the moment by the assignee.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/inprogress.png",
                            name: "In Progress",
                            id: "3",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-11T16:12:23.421+0530",
                description:
                    "Details:\n\n# Email with extracted data from query embedded into email body.\n# Refer attached a sample email\n# Query as \n{code:sql}WITH \nCLM AS\n(\nselect INTIMATION_NUMBER, CLAIM_KEY,INTIMATION_DATE, ROD_CLG_KEY,REJECTION_CATEGORY_ID,REJ_SUB_CTRGY_KEY from (\nselect INTIMATION_NUMBER, CLAIM_KEY,CAST(intimation_created_date AS DATE) INTIMATION_DATE, CASHLESS_KEY as ROD_CLG_KEY\n,REJECTION_CATEGORY_ID,RK1 ,REJ_SUB_CTRGY_KEY\nfrom (\nselect DISTINCT INTIMATION_NUMBER,chs.CLAIM_KEY,to_DATE(tt.created_date,'YYYY-MM-DD')intimation_created_date,chs.cashless_key,\nCHS.ITERATION_NUMBER,cs.REJECTION_CATEGORY_ID,cs.REJ_SUB_CTRGY_KEY,\nrow_number() OVER(PARTITION BY cs.cashless_key ORDER BY cs.CASHLESS_REJECT_KEY asc) RK1,cs.created_date\nfrom production.galaxy.ims_cls_intimation tt \ninner join production.galaxy.ims_cls_cashless chs on chs.intimation_key=tt.intimation_key AND SUBSTR(chs.ITERATION_NUMBER,25,4)='/001'\ninner join production.galaxy.ims_cls_cashless_reject cs on cs.CASHLESS_KEY=chs.CASHLESS_KEY\n)\nwhere  rk1=1)\nwhere REJECTION_CATEGORY_ID in (7515,7516,7519,11433,11441,11434,11440,7517,7514,11443)  \n),\nREJ_W AS\n(   \nselect to_DATE(tt.created_date,'YYYY-MM-DD')INTIMATION_DATE,\nSUM(CASE WHEN UPPER(pr.REJ_CATEGORY)='ALCOHOL / SUBSTANCE ABUSE / SELF INJURY'  THEN 1 ELSE 0 END ) `ALC_cnt`,\nSUM(CASE WHEN UPPER(pr.REJ_CATEGORY)='POLICY EXCLUSIONS'  THEN 1 ELSE 0 END ) `Pol_exc`,\nSUM(CASE WHEN UPPER(pr.REJ_CATEGORY)='WAITING PERIODS'  THEN 1 ELSE 0 END ) `wait_cnt`,\nSUM(CASE WHEN UPPER(pr.REJ_CATEGORY)='SPECIFIC EXCLUSIONS'  THEN 1 ELSE 0 END ) `SPEC_cnt`,\nSUM(CASE WHEN UPPER(pr.REJ_CATEGORY)='PRE-EXISTING DISEASE'  THEN 1 ELSE 0 END ) `predise`,\nCOUNT(CASE WHEN TT.SOURCE<>'ZOHO_CRM' THEN 1 END ) AS PORTAL ,\nCOUNT(CASE WHEN TT.SOURCE='ZOHO_CRM' THEN 1 END ) AS ZOHO_CRM ,\nCOUNT(TT.SOURCE) TOTAL\n---- SUM(CASE WHEN ccd.CLAIM_NUMBER  LIKE 'CLMG%'   THEN 1 ELSE 0 END ) `CLMG`\nfrom prod_view.reporting_tables.agg_claim_cashless_data cc\ninner join  production.galaxy.ims_cls_intimation  TT on TT.INTIMATION_NUMBER = cc.INTIMATION_NUMBER\ninner join  production.galaxy.ims_cls_CLAIM  ccd on ccd.INTIMATION_NUMBER = cc.INTIMATION_NUMBER\nInner join clm h1 on h1.ROD_CLG_KEY=cc.rod_clg_key\nLEFT JOIN production.galaxy.mas_decision_prahrej_catgry pr on pr.REF_MASTER_KEY=h1.REJECTION_CATEGORY_ID and pr.ACTIVE_STATUS=1\nwhere  UPPER(REJECTION_CATEGORY) IN \n('ALCOHOL / SUBSTANCE ABUSE / SELF INJURY','POLICY EXCLUSIONS','WAITING PERIODS','SPECIFIC EXCLUSIONS','PRE-EXISTING DISEASE')\nand ccd.CLAIM_NUMBER NOT LIKE 'CLMG%' \nAND SUBSTR(ROD_CLG_NUMBER,25,4)='/001'\nAND cc.ROD_CLG_STATUS='Rejected' group by to_DATE(tt.created_date,'YYYY-MM-DD')\n)\nSELECT DISTINCT to_date(J1.INTIMATION_DATE,'DD-MM-YYYY') `DATE`,coalesce(PORTAL,0 )PORTAL,coalesce(ZOHO_CRM,0 )ZOHO_CRM,coalesce(TOTAL,0 )TOTAL,\ncoalesce(j2.wait_cnt,0 ) REJECTION_WAITING_PERIODS,\ncoalesce(j2.Pol_exc,0 ) as`POLICY_EXCLUSION`,\ncoalesce(j2.ALC_cnt,0 ) as `ALCOHOL / SUBSTANCE ABUSE / SELF INJURY`,\ncoalesce(j2.SPEC_cnt,0 ) as `SPECIFIC EXCLUSIONS`,\ncoalesce(j2.predise,0 ) as `PRE-EXISTING DISEASE`,\n(coalesce(j2.wait_cnt,0 )+coalesce(j2.Pol_exc,0 )+coalesce(j2.ALC_cnt,0 )+coalesce(j2.predise,0 )+coalesce(j2.SPEC_cnt,0 )) as TOTAL_REJECTIONS\nFROM  CLM J1\nleft join REJ_W j2 on  CAST(j2.INTIMATION_DATE as date) = CAST(J1.INTIMATION_DATE AS DATE)\nwhere   MONTH(j1.INTIMATION_DATE) =MONTH(CURRENT_DATE()) AND  YEAR(j1.INTIMATION_DATE) =YEAR(CURRENT_DATE())\nORDER BY 1 ASC;{code}\n\n\n\n!image-20240911-104542.png|width=1533,height=750,alt=\"image-20240911-104542.png\"!",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                    accountId: "62ce6092a94a6f9c0efea08f",
                    emailAddress: "santoshkumar.s@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                    },
                    displayName: "Santosh Kumar",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131900/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T16:03:35.856+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10606",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "In Dev",
                    id: "10606",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131886",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131886",
            key: "STAR-61862",
            fields: {
                summary: "Solution Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131394",
                    key: "STAR-61422",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394",
                    fields: {
                        summary: "Adding branch code to agg_fm_policy_info",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-11T15:44:10.744+0530",
                description: "Solution Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131886/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131886/worklog/43728",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:01:23.590+0530",
                            updated: "2024-09-13T12:01:23.590+0530",
                            started: "2024-09-11T11:01:00.000+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43728",
                            issueId: "131886",
                        },
                    ],
                },
                updated: "2024-09-13T12:01:23.605+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131885",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131885",
            key: "STAR-61861",
            fields: {
                summary: "Requirement Gathering",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131394",
                    key: "STAR-61422",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394",
                    fields: {
                        summary: "Adding branch code to agg_fm_policy_info",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-11T15:43:26.246+0530",
                description: "Requirement Gathering",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-20",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131885/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131885/worklog/43727",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:01:00.499+0530",
                            updated: "2024-09-13T12:01:00.499+0530",
                            started: "2024-09-11T11:00:00.000+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43727",
                            issueId: "131885",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T12:01:00.512+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131746",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131746",
            key: "STAR-61744",
            fields: {
                summary:
                    "Issue in installment number in emi mart for few sample in emi mart.",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10005",
                    id: "10005",
                    description: "A problem or error.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    name: "Bug",
                    subtask: false,
                    avatarId: 10303,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-10T17:57:12.642+0530",
                description:
                    "Issue in installment number in emi mart for few sample in emi mart.\n\n[^Issue in installment number in EMI mart.xlsx]\n\n",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                    accountId: "62f0a96b48e310e672970057",
                    emailAddress: "jitendrakumar.patel@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                    },
                    displayName: "jitendrakumar.patel",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                    name: "High",
                    id: "2",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131746/comment/207642",
                            id: "207642",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "cc [~accountid:712020:251d7370-c837-4efa-9d60-7769841aca3a] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T17:57:48.806+0530",
                            updated: "2024-09-10T17:57:48.806+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131746/comment/208633",
                            id: "208633",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: '[~accountid:62f0a96b48e310e672970057] the issue is resolved now.\n\nReason - while calculating installment_no the row_number was given on basis of emi_due_date  which also considered the cancelled transactions also.\n\nSolution - I isolated the -1 installment_no and then did the ranking which now has resolved the issue , the total count before and after the change remained same.\n\n\n\n!IMG_20240912_132240 (1).jpg|width=4000,height=1800,alt="IMG_20240912_132240 (1).jpg"!\n\n!IMG_20240912_132251.jpg|width=4000,height=1800,alt="IMG_20240912_132251.jpg"!\n\n\n\n!IMG_20240912_132310.jpg|width=4000,height=1800,alt="IMG_20240912_132310.jpg"!',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T13:29:41.882+0530",
                            updated: "2024-09-12T13:29:41.882+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131746/comment",
                    maxResults: 2,
                    total: 2,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                    accountId: "62f0a96b48e310e672970057",
                    emailAddress: "jitendrakumar.patel@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                    },
                    displayName: "jitendrakumar.patel",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 3,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131746/worklog/43652",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A558ce5ec-ceda-4dbf-b57b-052480f25d9f",
                                accountId: "712020:558ce5ec-ceda-4dbf-b57b-052480f25d9f",
                                emailAddress: "v.abhishekkumar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                },
                                displayName: "v.abhishekkumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A558ce5ec-ceda-4dbf-b57b-052480f25d9f",
                                accountId: "712020:558ce5ec-ceda-4dbf-b57b-052480f25d9f",
                                emailAddress: "v.abhishekkumar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/946882a6c88817c371496f9fe6920a0d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                },
                                displayName: "v.abhishekkumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T19:49:44.625+0530",
                            updated: "2024-09-11T19:49:44.625+0530",
                            started: "2024-09-11T16:18:55.725+0530",
                            timeSpent: "3h 30m",
                            timeSpentSeconds: 12600,
                            id: "43652",
                            issueId: "131746",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131746/worklog/43689",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T13:18:41.271+0530",
                            updated: "2024-09-12T13:18:41.271+0530",
                            started: "2024-09-11T12:30:00.000+0530",
                            timeSpent: "5h",
                            timeSpentSeconds: 18000,
                            id: "43689",
                            issueId: "131746",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131746/worklog/43690",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T13:18:52.945+0530",
                            updated: "2024-09-12T13:18:52.945+0530",
                            started: "2024-09-12T08:18:44.447+0530",
                            timeSpent: "5h",
                            timeSpentSeconds: 18000,
                            id: "43690",
                            issueId: "131746",
                        },
                    ],
                },
                updated: "2024-09-12T13:35:48.236+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10606",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "In Dev",
                    id: "10606",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131737",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131737",
            key: "STAR-61738",
            fields: {
                summary: "Column addition in agg_collection_mart_daily",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                    id: "10003",
                    description: "A small, distinct piece of work.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                    name: "Task",
                    subtask: false,
                    avatarId: 10318,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-10T17:34:58.048+0530",
                description:
                    "Please find the mentioned point for addition in agg_collection_mart_daily\n\nNew column PAYMENT_DATE to be added in aggregate\n\nRefer the below SSM\n\n[https://starhealthinsurance.atlassian.net/wiki/pages/resumedraft.action?draftId=757432362&draftShareId=c93026d4-5698-4bab-b5f5-dd74313a0c6f|https://starhealthinsurance.atlassian.net/wiki/pages/resumedraft.action?draftId=757432362&draftShareId=c93026d4-5698-4bab-b5f5-dd74313a0c6f|smart-link] \n\nCC: [~accountid:62f0a96b48e310e672970057]  [~accountid:62ce6092a94a6f9c0efea08f] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                    accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                    emailAddress: "vaishnavi.shelke@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                    },
                    displayName: "vaishnavi.shelke",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/1",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/highest.svg",
                    name: "Highest",
                    id: "1",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131737/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                    accountId: "62ce6092a94a6f9c0efea08f",
                    emailAddress: "santoshkumar.s@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                    },
                    displayName: "Santosh Kumar",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-10T17:39:45.059+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10000",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Backlog",
                    id: "10000",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131628",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131628",
            key: "STAR-61642",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "131568",
                    key: "STAR-61587",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568",
                    fields: {
                        summary:
                            "New aggregate for policy master for sum insured for Premia",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10614",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "In UAT",
                            id: "10614",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-10T11:45:46.345+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131628/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                    accountId: "63720823f6c85b343c066990",
                    emailAddress: "v.yashchilwar@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                    },
                    displayName: "Yash Chilwar",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-13T17:51:03.912+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131577",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131577",
            key: "STAR-61596",
            fields: {
                summary:
                    "Separate SQL tables for non-fraud rules in Decision Management System",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-09T18:09:30.299+0530",
                description:
                    "+*Details*+:\n\n# Objective is to create a separate SQL table for new events (non-fraud rules) in Decision Management System.\n# Tables -\n## agg_nfm_policy_info\n## agg_nfm_insrd_info\n\nTwo new tables are sub-set of existing tables: agg_fm_policy_info and agg_fm_insrd_info.\n\n# SSM is available at [Fraud Mart - Data Engineering - Confluence (atlassian.net)|https://starhealthinsurance.atlassian.net/wiki/spaces/DE/pages/179175453/Fraud+Mart]\n# SQL movement? - Yes",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                    accountId: "62ce6092a94a6f9c0efea08f",
                    emailAddress: "santoshkumar.s@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                    },
                    displayName: "Santosh Kumar",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-18",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131577/comment/207501",
                            id: "207501",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Hi [~accountid:630c99486a8bb4eda6768fbd] below are the requirements discussed for the development of this story\n\n# Both the reports will contain data for current financial year by filtering on policy approval date\n# Both the reports will be delta table and incremental logic will be similar to AGG_FM_POLICY_INFO and AGG_FM_INSRD_INFO\n# Trigger for both the reports will be same  time as AGG_FM_POLICY_INFO and AGG_FM_INSRD_INFO - Kindly confirm on this\n# Both ETL and FINAL tables for both the reports need to be created in SQL Server by STAR team. Kindly confirm once created, then we can test SQL Server movement once development is complete.\n# For SQL Server movement column mapping table is required, Kindly share this as well\n\nCC [~accountid:63045b8e6acf9eeb443dbf0b] [~accountid:6399b7a9abc764d2ca5f3984] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T16:27:48.227+0530",
                            updated: "2024-09-10T16:27:48.227+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131577/comment/208121",
                            id: "208121",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ae807e9b3-efe1-488f-85cb-57c66e0cfd04",
                                accountId: "712020:e807e9b3-efe1-488f-85cb-57c66e0cfd04",
                                emailAddress: "s.saran@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                },
                                displayName: "SARAN S",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Hi [~accountid:712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59] ,\n\n# Kindly use policy_to_date >='01-Apr-2024'.\n# Yes report should be delta table and incremental logic will be similar to AGG_FM_POLICY_INFO and AGG_FM_INSRD_INFO .\n# Yes Trigger should be same time.\n# Will Inform after Table Created.\n# Find the attached Document for Column Mapping\n\n\n\n[^Mapping of DL and SQL Objects V.1.5.xlsx]\n\nCC: [~accountid:62ce6092a94a6f9c0efea08f] [~accountid:6399b7a9abc764d2ca5f3984] [~accountid:630c99486a8bb4eda6768fbd] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ae807e9b3-efe1-488f-85cb-57c66e0cfd04",
                                accountId: "712020:e807e9b3-efe1-488f-85cb-57c66e0cfd04",
                                emailAddress: "s.saran@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                                },
                                displayName: "SARAN S",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T15:59:28.539+0530",
                            updated: "2024-09-11T15:59:28.539+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131577/comment",
                    maxResults: 2,
                    total: 2,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                    accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                    emailAddress: "v.shahidkhan@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                    },
                    displayName: "v.shahidkhan",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-12T10:52:45.847+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10379",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "DEV COMPLETED",
                    id: "10379",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131568",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568",
            key: "STAR-61587",
            fields: {
                summary: "New aggregate for policy master for sum insured for Premia",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-09T17:19:33.723+0530",
                description:
                    "[https://starhealthinsurance.atlassian.net/wiki/x/O4D9L|https://starhealthinsurance.atlassian.net/wiki/x/O4D9L|smart-link] \n\nPlease find the link for the blueprint of the aggregate to be created in production and prod_view catalog",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                    accountId: "63045b8b75b5bbf5e3171702",
                    emailAddress: "arnesh.chopra@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                    },
                    displayName: "arnesh.chopra",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-16",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/206943",
                            id: "206943",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "cc [~accountid:6399b7a9abc764d2ca5f3984] [~accountid:712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a] [~accountid:62f0a96b48e310e672970057]  Kindly review the blueprint mentioned in the description.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T17:30:51.769+0530",
                            updated: "2024-09-09T17:30:51.769+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/206981",
                            id: "206981",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8e6acf9eeb443dbf0b] [~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] - This story created for separate table for SI.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T17:56:05.076+0530",
                            updated: "2024-09-09T17:56:05.076+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/207025",
                            id: "207025",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=6399b7a9abc764d2ca5f3984",
                                accountId: "6399b7a9abc764d2ca5f3984",
                                emailAddress: "sivaprakash.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                },
                                displayName: "sivaprakash.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8b75b5bbf5e3171702] [~accountid:63045b8e6acf9eeb443dbf0b]  It cannot be truncate and load, it should be incremental data loading for the policies were policy sum insured is zero to considered and loaded in this table every week.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=6399b7a9abc764d2ca5f3984",
                                accountId: "6399b7a9abc764d2ca5f3984",
                                emailAddress: "sivaprakash.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/43a12c1a54313c72b8ebf19c4579f8d6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FS-1.png",
                                },
                                displayName: "sivaprakash.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T18:35:55.173+0530",
                            updated: "2024-09-09T18:35:55.173+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/207118",
                            id: "207118",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:6399b7a9abc764d2ca5f3984] [~accountid:63045b8e6acf9eeb443dbf0b] The changes have been done and the latest blueprint is uploaded on the link mentioned in the description.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T09:45:48.746+0530",
                            updated: "2024-09-10T09:45:48.746+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208085",
                            id: "208085",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "hi [~accountid:63045b8b75b5bbf5e3171702] [~accountid:6399b7a9abc764d2ca5f3984] [~accountid:712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a] as per the SSM when we take the policy_master with filter conditions like current_sum_insured =0, grace_date >= current_date() -1 and policy_status = 'ACTIVE' then as per the the function given for the current_sum_insured we get only 4 records where we get non zero value of  current_sum_inusred. Maximum time we are getting 0 for the records where {{M_Polh_End_Code}} i.e {{Polh_End_Type}} from pgith_policy is null and as per the given function if {{Polh_End_Type}} != 015  and pol_prod_code not like {{'ACC%'}} then we call c1 and values we get from c1 is null and same goes for the condition {{Polh_End_Type}} != 015  and pol_prod_code like {{'ACC%'}} then we call c2 and we get null values from c2. \n\n!image-20240911-090225.png|width=50%,alt=\"image-20240911-090225.png\"!\n\n.also we do not have any records where polh_prod_code is in ({{'MED-PRD-009', ΓÇÿMED-PRD-031', 'MED-PRD-058'}}) and similarly for {{ACC-PRD-005', 'ACC-PRD-008', 'ACC-PRD-016'}}.  And also we do not get any records where {{polh_end_type}} = '015ΓÇÖ\n\n\n\n!image-20240911-090247.png|width=1212,height=547,alt=\"image-20240911-090247.png\"!\n\ncc: [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T15:26:12.999+0530",
                            updated: "2024-09-11T15:26:12.999+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208383",
                            id: "208383",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8b75b5bbf5e3171702] [~accountid:712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a] [~accountid:6399b7a9abc764d2ca5f3984] do we need to change queries used in function or any filter condition while loading the policy_master ??",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T10:51:37.000+0530",
                            updated: "2024-09-12T10:51:37.000+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208443",
                            id: "208443",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] , Please remove the following condition for policy master\n\ngrace_date >= current_date() -1 and policy_status = 'ACTIVE'\n\nAnd this {{Polh_End_Type}} != 015 should be coalesce({{Polh_End_Type,'X')}} != 015\n\nShare the CTE created using the PL/SQL function. Will check it once",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T11:23:10.639+0530",
                            updated: "2024-09-12T11:23:10.639+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208635",
                            id: "208635",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "hi [~accountid:712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a] [~accountid:63045b8b75b5bbf5e3171702] [~accountid:6399b7a9abc764d2ca5f3984] suggest changes are made now we are getting {{30703}} reocrds where current_sum_inusred !=0 there are some values where we are getting -ive sum_inusred after checking we found out that the provided queries are giving - values for corresponding records. \n\n!image-20240912-075828.png|width=1248,height=364,alt=\"image-20240912-075828.png\"!\n\n!image-20240912-075843.png|width=854,height=484,alt=\"image-20240912-075843.png\"!\n\n{code:sql}%sql \ncreate or replace temp view c0_c6 as (\nwith c0 as (select polh_no,Polh_End_Type as M_Polh_End_Code,POLH_SYS_ID,Polh_End_No_Idx,POLH_PROD_CODE,\n            case when POLH_PROD_CODE not like 'ACC%' and POLH_PROD_CODE in ('MED-PRD-009', 'MED-PRD-031', 'MED-PRD-058') then 1 \n            when POLH_PROD_CODE like 'ACC%' and POLH_PROD_CODE in  ('ACC-PRD-005', 'ACC-PRD-008', 'ACC-PRD-016') then 1\n            else 0 end as M_Val\n            from pgith_policy),\nc6 as  (Select Prch_Pol_Sys_Id,Prch_End_No_Idx,Min(Prch_Lvl1_Sys_Id) as M_Prc_Lvl1_Sys_Id\n      From Pgith_Pol_Risk_Cover, Pgit_PA_Prod_Cover\n     --Where Prch_Pol_Sys_Id = POLH_SYS_ID\n      --and Prch_End_No_Idx = Polh_End_No_Idx\n       where  Prch_Lvl1_Sys_Id Is Not Null\n       And Ppc_Cvr_Code = Prch_Code\n       And Ppc_Prod_Code = Prch_prod_Code \n       group by Prch_Pol_Sys_Id,Prch_End_No_Idx)        \nselect c0.*,case when c0.polh_prod_code not like 'ACC%' and c0.polh_prod_code in ('MED-PRD-009', 'MED-PRD-031', 'MED-PRD-058') then c6.M_Prc_Lvl1_Sys_Id\n                  when c0.polh_prod_code  like 'ACC%' and c0.polh_prod_code in ('ACC-PRD-005', 'ACC-PRD-008', 'ACC-PRD-016') then c6.M_Prc_Lvl1_Sys_Id\n                  else 0 end as M_Prc_Lvl1_Sys_Id\nfrom c0 left join c6 on c0.POLH_SYS_ID = c6.Prch_Pol_Sys_Id and c0.Polh_End_No_Idx = c6.Prch_End_No_Idx)\n-------------------------------------------------------\npgith_policy_zero_sum_final_df = spark.sql(\"\"\"\nwith c1 as (Select Prch_Pol_Sys_Id,Prch_End_No_Idx,Max(Nvl(Prch_Si_Fc, 0) + Nvl(Prch_Org_Si_Fc, 0)) MS_I_c1 \n           from   Pgith_Pol_Risk_Cover \n     --Where Prch_Pol_Sys_Id = P_Pol_Sys_Id\n      -- And Prch_End_No_Idx = P_End_No_Idx\n       \n       --where Decode(M_Val, 1, Prch_Lvl1_Sys_Id, 0) =\n        --   Decode(M_Val, 1, M_Prc_Lvl1_Sys_Id, 0)\n      where  (Nvl(Prch_Si_Fc, 0) <> 0 Or Nvl(Prch_Org_Si_Fc, 0) <> 0)\n       And Exists (Select 1\n              From Pgim_Prod_Appl_Cover\n             Where Pcvr_Cvr_Code = Prch_Code\n               And Pcvr_Basic_Yn = '1'\n               And Pcvr_Prod_Code = Prch_prod_Code)\n        group by Prch_Pol_Sys_Id,Prch_End_No_Idx\n        ),\nc11 as ( Select Prch_Pol_Sys_Id,Prch_End_No_Idx,Min(Nvl(Prch_Si_Fc, 0)) as MS_I_c11\n      From   Pgith_Pol_Risk_Cover \n     --Where Prch_Pol_Sys_Id = P_Pol_Sys_Id\n    -- And Prch_End_No_Idx = P_End_No_Idx\n       \n       --where Decode(M_Val, 1, Prch_Lvl1_Sys_Id, 0) =\n        --   Decode(M_Val, 1, M_Prc_Lvl1_Sys_Id, 0)\n       where Nvl(Prch_Si_Fc, 0) <> 0\n       And Exists (Select 1\n              From Pgim_Prod_Appl_Cover\n             Where Pcvr_Cvr_Code = Prch_Code\n               And Pcvr_Basic_Yn = '1'\n               And Pcvr_Prod_Code = Prch_prod_Code)\n        group by Prch_Pol_Sys_Id,Prch_End_No_Idx ),\nc2 as (\n  Select Prch_Pol_Sys_Id,Prch_End_No_Idx,Sum(Nvl(Prch_Si_Fc, 0) + Nvl(Prch_Org_Si_Fc, 0)) as MS_I_c2\n      From  Pgith_Pol_Risk_Cover \n     --Where Prch_Pol_Sys_Id = P_Pol_Sys_Id\n      -- And Prch_End_No_Idx = P_End_No_Idx\n       \n       --where Decode(M_Val, 1, Prch_Lvl1_Sys_Id, 0) =\n        --   Decode(M_Val, 1, M_Prc_Lvl1_Sys_Id, 0)\n       where (Nvl(Prch_Si_Fc, 0) <> 0 Or Nvl(Prch_Org_Si_Fc, 0) <> 0)\n       And Exists (Select 1\n              From Pgit_PA_Prod_Cover\n             Where Ppc_Cvr_Code = Prch_Code\n               And Ppc_Prod_Code = Prch_prod_Code)\n        group by Prch_Pol_Sys_Id,Prch_End_No_Idx\n),\nc22 as (\n  Select Prch_Pol_Sys_Id,Prch_End_No_Idx,Min(Nvl(Prch_Si_Fc, 0)) as MS_I_c22\n      From  Pgith_Pol_Risk_Cover \n     --Where Prch_Pol_Sys_Id = P_Pol_Sys_Id\n      -- And Prch_End_No_Idx = P_End_No_Idx\n       \n       --where Decode(M_Val, 1, Prch_Lvl1_Sys_Id, 0) =\n        --   Decode(M_Val, 1, M_Prc_Lvl1_Sys_Id, 0)\n       where Nvl(Prch_Si_Fc, 0) <> 0\n       And Exists (Select 1\n              From Pgit_PA_Prod_Cover\n             Where Ppc_Cvr_Code = Prch_Code\n               And Ppc_Prod_Code = Prch_prod_Code)\n        group by Prch_Pol_Sys_Id,Prch_End_No_Idx\n)\nselect c0_c6.*,nvl(c1.MS_I_c1,0) as MS_I_c1 ,nvl(c2.MS_I_c2,0) as MS_I_c2 ,nvl(c11.MS_I_c11,0) as MS_I_c11,nvl(c22.MS_I_c22,0) as MS_I_c22 from \nc0_c6 left join c1 on c0_c6.POLH_SYS_ID =  c1.Prch_Pol_Sys_Id and c0_c6.Polh_End_No_Idx = c1.Prch_End_No_Idx\n      left join Pgith_Pol_Risk_Cover t1 on c0_c6.POLH_SYS_ID =  t1.Prch_Pol_Sys_Id and c0_c6.Polh_End_No_Idx = t1.Prch_End_No_Idx\n      left join c11 on c0_c6.POLH_SYS_ID =  c11.Prch_Pol_Sys_Id and c0_c6.Polh_End_No_Idx = c11.Prch_End_No_Idx\n      left join c2 on c0_c6.POLH_SYS_ID =  c2.Prch_Pol_Sys_Id and c0_c6.Polh_End_No_Idx = c2.Prch_End_No_Idx\n      left join c22 on c0_c6.POLH_SYS_ID =  c22.Prch_Pol_Sys_Id and c0_c6.Polh_End_No_Idx = c22.Prch_End_No_Idx\n      where Decode(M_Val, 1, Prch_Lvl1_Sys_Id, 0) = Decode(M_Val, 1, M_Prc_Lvl1_Sys_Id, 0)\n      \"\"\")\n------------------------------------------------------------------------------\npgith_policy_zero_sum_final_df = (\n    pgith_policy_zero_sum_final_df.withColumn(\"current_sum_insured\",expr(\"\"\" \n                                         case when polh_prod_code not like 'ACC%' and Nvl(M_Polh_End_Code, 'X') <> '015' then MS_I_c1\n                                         when polh_prod_code not like 'ACC%' and Nvl(M_Polh_End_Code, 'X') = '015' then MS_I_c11\n                                         when polh_prod_code like 'ACC%' and Nvl(M_Polh_End_Code, 'X') <> '015' then MS_I_c2\n                                         when polh_prod_code like 'ACC%'and Nvl(M_Polh_End_Code, 'X') = '015' then MS_I_c22 \n                                         else 0 end \"\"\"))\n    .withColumn(\"rank\",expr(\"row_number() over(partition by POLH_NO order by  POLH_END_NO_IDX desc)\"))\n    .filter(col(\"rank\")==1).drop(\"rank\")\n    \n)\n\nand we have used row_number() over(partition by POLH_NO order by  POLH_END_NO_IDX desc) the deduplication \ncondition for pgith_policy table\n{code}\n\ncc: [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T13:31:42.478+0530",
                            updated: "2024-09-12T13:31:42.478+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208638",
                            id: "208638",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] , As mentioned in the SSM, please use polh_end_no_idx=0 in all queries. Do not use the endorsement idx from policy master. In the below example it seems end_no_idx=1",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T13:48:41.930+0530",
                            updated: "2024-09-12T13:48:41.930+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208649",
                            id: "208649",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] , One more observation, in the PL/SQL function in c0, Sum insured will be fetched. At the end of the function, if derived SI=0, then SI from c0 will be returned. It seems that part is not handled",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T14:05:11.146+0530",
                            updated: "2024-09-12T14:05:11.146+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208788",
                            id: "208788",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: 'hi [~accountid:712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a]As discussed in the call now we are joining the tables using condition {{c0_c6.POLH_SYS_ID = ┬ác1.Prch_Pol_Sys_Id and c0_c6.Polh_End_No_Idx = 0}} and for the values where si = 0 we are taking values from c0 but the values that we get from c0 for such records is also = 0 \n\n!image-20240912-102746.png|width=1371,height=463,alt="image-20240912-102746.png"!\n\n for taking records from pgith_policy where polh_end_no_idx = 0  when we use deduplication condition like row_number() over(partition by polh_bo order by polh_no_idx asc) then we get  {{32256}}  records where current_sum_inusured != 0 and when we use the condition row_number() over(partition by polh_no \n\n!image-20240912-102807.png|width=1334,height=441,alt="image-20240912-102807.png"!\n\norder by end_no_idx desc) then we have {{27283}} records where si != 0 \n\n!image-20240912-102821.png|width=50%,alt="image-20240912-102821.png"!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ncc: [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] ',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T16:08:39.450+0530",
                            updated: "2024-09-12T16:08:39.450+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/208865",
                            id: "208865",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] , I am analyzing the queries. Will share you the logic soon",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T16:59:23.018+0530",
                            updated: "2024-09-12T16:59:23.018+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/209218",
                            id: "209218",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] , Please use the below query. It will return sum insured for all except around 75K policies. For those 75K policies, in source itself sum insured is not available. We can ignore \n\n\n\n{noformat}WITH C0 AS (\n┬á ┬á ┬á ┬á ┬á ┬á SELECT POLH_NO,POLH_SYS_ID,\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á CASE WHEN COALESCE(POLH_SI_LC_1, 0)=0 THEN COALESCE(POLH_ORG_SI_LC_1,0) ELSE COALESCE(POLH_SI_LC_1,0) END MAIN_SI,\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á CASE WHEN POLH_PROD_CODE IN ('MED-PRD-009', 'MED-PRD-031', 'MED-PRD-058','ACC-PRD-005', 'ACC-PRD-008', 'ACC-PRD-016') \n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á THEN 1\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ELSE 0\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á END M_VAL\n┬á ┬á ┬á ┬á ┬á ┬á FROM PRODUCTION.PREMIA.PGITH_POLICY\n┬á ┬á ┬á ┬á ┬á ┬á WHERE POLH_END_NO_IDX = 0\n┬á ┬á ┬á ┬á ┬á ┬á AND POLH_DS_TYPE='2'\n┬á ┬á ┬á ┬á ┬á ┬á ),\n┬á ┬á C6 ┬áAS (\n┬á ┬á ┬á ┬á ┬á ┬á SELECT POLH_NO,POLH_SYS_ID,\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á CASE WHEN PRCH_PROD_CODE IN ('MED-PRD-009', 'MED-PRD-031', 'MED-PRD-058','ACC-PRD-005', 'ACC-PRD-008', 'ACC-PRD-016') \n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á THEN MIN(PRCH_LVL1_SYS_ID)\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ELSE 0\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á END M_PRC_LVL1_SYS_ID\n┬á ┬á ┬á ┬á ┬á ┬á FROM C0,PRODUCTION.PREMIA.PGITH_POL_RISK_COVER, PRODUCTION.PREMIA.PGIT_PA_PROD_COVER\n┬á ┬á ┬á ┬á ┬á ┬á WHERE POLH_SYS_ID=PRCH_POL_SYS_ID\n┬á ┬á ┬á ┬á ┬á ┬á AND PRCH_END_NO_IDX=0\n┬á ┬á ┬á ┬á ┬á ┬á AND PRCH_LVL1_SYS_ID IS NOT NULL\n┬á ┬á ┬á ┬á ┬á ┬á AND PPC_CVR_CODE = PRCH_CODE\n┬á ┬á ┬á ┬á ┬á ┬á AND PPC_PROD_CODE = PRCH_PROD_CODE\n┬á ┬á ┬á ┬á ┬á ┬á GROUP BY POLH_NO,POLH_SYS_ID,PRCH_PROD_CODE\n┬á ┬á ┬á ┬á ┬á ┬á ),\n┬á ┬á C1 ┬áAS (\n┬á ┬á ┬á ┬á SELECT C0.POLH_NO,MAX(COALESCE(PRCH_SI_FC, 0) + COALESCE(PRCH_ORG_SI_FC, 0)) C1_SI\n┬á ┬á ┬á ┬á FROM C0,PRODUCTION.PREMIA.PGITH_POL_RISK_COVER \n┬á ┬á ┬á ┬á LEFT JOIN C6 ON (PRCH_POL_SYS_ID = C6.POLH_SYS_ID)\n┬á ┬á ┬á ┬á WHERE PRCH_POL_SYS_ID = C0.POLH_SYS_ID\n┬á ┬á ┬á ┬á AND PRCH_END_NO_IDX = 0\n┬á ┬á ┬á ┬á AND CASE WHEN C0.M_VAL=1 THEN PRCH_LVL1_SYS_ID ELSE 0 END = CASE WHEN C0.M_VAL=1 THEN C6.M_PRC_LVL1_SYS_ID ELSE 0 END\n┬á ┬á ┬á ┬á AND (COALESCE(PRCH_SI_FC, 0) <> 0 OR COALESCE(PRCH_ORG_SI_FC, 0) <> 0)\n┬á ┬á ┬á ┬á AND PRCH_PROD_CODE NOT LIKE 'ACC%'\n┬á ┬á ┬á ┬á AND EXISTS (SELECT 1\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á FROM PRODUCTION.PREMIA.PGIM_PROD_APPL_COVER\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á WHERE PCVR_CVR_CODE = PRCH_CODE\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á AND PCVR_BASIC_YN = '1'\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á AND PCVR_PROD_CODE = PRCH_PROD_CODE)\n┬á ┬á ┬á ┬á GROUP BY C0.POLH_NO,PRCH_PROD_CODE\n┬á ┬á ┬á ┬á ),\n┬á ┬á C2 AS (\n┬á ┬á ┬á ┬á SELECT C0.POLH_NO,SUM(COALESCE(PRCH_SI_FC, 0) + COALESCE(PRCH_ORG_SI_FC, 0)) C2_SI\n┬á ┬á ┬á ┬á FROM C0,PRODUCTION.PREMIA.PGITH_POL_RISK_COVER \n┬á ┬á ┬á ┬á LEFT JOIN C6 ON (PRCH_POL_SYS_ID = C6.POLH_SYS_ID)\n┬á ┬á ┬á ┬á WHERE PRCH_POL_SYS_ID = C0.POLH_SYS_ID\n┬á ┬á ┬á ┬á AND PRCH_END_NO_IDX = 0\n┬á ┬á ┬á ┬á AND CASE WHEN C0.M_VAL=1 THEN PRCH_LVL1_SYS_ID ELSE 0 END = CASE WHEN C0.M_VAL=1 THEN M_PRC_LVL1_SYS_ID ELSE 0 END\n┬á ┬á ┬á ┬á AND (COALESCE(PRCH_SI_FC, 0) <> 0 OR COALESCE(PRCH_ORG_SI_FC, 0) <> 0)\n┬á ┬á ┬á ┬á AND PRCH_PROD_CODE LIKE 'ACC%'\n┬á ┬á ┬á ┬á AND EXISTS (SELECT 1\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á FROM PRODUCTION.PREMIA.PGIT_PA_PROD_COVER\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á WHERE PPC_CVR_CODE = PRCH_CODE\n┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á ┬á AND PPC_PROD_CODE = PRCH_PROD_CODE)\n┬á ┬á ┬á ┬á GROUP BY C0.POLH_NO\n┬á ┬á ┬á ┬á ),\n┬á ┬á C3 AS (\n┬á ┬á ┬á ┬á SELECT C0.POLH_NO,MAX(COALESCE(PRCH_SI_FC, 0) + COALESCE(PRCH_ORG_SI_FC, 0)) C3_SI\n┬á ┬á ┬á ┬á FROM C0,PRODUCTION.PREMIA.PGITH_POL_RISK_COVER \n┬á ┬á ┬á ┬á WHERE PRCH_POL_SYS_ID = C0.POLH_SYS_ID\n┬á ┬á ┬á ┬á AND PRCH_END_NO_IDX = 0\n┬á ┬á ┬á ┬á AND (COALESCE(PRCH_SI_FC, 0) <> 0 OR COALESCE(PRCH_ORG_SI_FC, 0) <> 0)\n┬á ┬á ┬á ┬á GROUP BY C0.POLH_NO\n┬á ┬á ┬á ┬á ),\n┬á ┬á POLICY_SI AS (\n┬á ┬á ┬á ┬á SELECT POLICY_NUMBER,\n┬á ┬á ┬á ┬á CASE WHEN COALESCE(C1_SI,0) <>0 THEN COALESCE(C1_SI,0) \n┬á ┬á ┬á ┬á ┬á ┬á ┬áWHEN COALESCE(C2_SI,0) <>0 THEN COALESCE(C2_SI,0) \n┬á ┬á ┬á ┬á ┬á ┬á ┬áWHEN COALESCE(C3_SI,0) <>0 THEN COALESCE(C3_SI,0) \n┬á ┬á ┬á ┬á ELSE C0.MAIN_SI\n┬á ┬á ┬á ┬á END M_SI\n┬á ┬á ┬á ┬á FROM PRODUCTION.REPORTING_TABLES.AGG_POLICY_MASTER_REPORT_DAILY \n┬á ┬á ┬á ┬á LEFT JOIN C0 ON (POLICY_NUMBER=C0.POLH_NO)\n┬á ┬á ┬á ┬á LEFT JOIN C1 ON (POLICY_NUMBER=C1.POLH_NO)\n┬á ┬á ┬á ┬á LEFT JOIN C2 ON (POLICY_NUMBER=C2.POLH_NO)\n┬á ┬á ┬á ┬á LEFT JOIN C3 ON (POLICY_NUMBER=C3.POLH_NO)\n┬á ┬á ┬á ┬á WHERE COALESCE(CURRENT_SUM_INSURED,0)<=0\n┬á ┬á ┬á ┬á )\nSELECT * FROM POLICY_SI;{noformat}",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                accountId: "712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a",
                                emailAddress: "muruganandhan.b@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/c57f78d86c2f0988d0eb103edbf5a5bf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
                                },
                                displayName: "muruganandhan.b",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:27:53.235+0530",
                            updated: "2024-09-13T12:27:53.235+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/209560",
                            id: "209560",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "QA complete",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T17:49:55.458+0530",
                            updated: "2024-09-13T17:49:55.458+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/209561",
                            id: "209561",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "QA complete",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T17:50:12.329+0530",
                            updated: "2024-09-13T17:50:12.329+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment/209571",
                            id: "209571",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "hi [~accountid:712020:ac9af49e-95e0-4e8b-847d-3aa73c96ac5a] [~accountid:63045b8b75b5bbf5e3171702] [~accountid:6399b7a9abc764d2ca5f3984] queries are changed as per the requirement and data for the same is written in uat. information regarding the same is present in [https://starhealthinsurance.atlassian.net/browse/STAR-61641|https://starhealthinsurance.atlassian.net/browse/STAR-61641|smart-link] . Please check.. ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T18:00:59.223+0530",
                            updated: "2024-09-13T18:01:30.471+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/comment",
                    maxResults: 16,
                    total: 16,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                    accountId: "63045b8b75b5bbf5e3171702",
                    emailAddress: "arnesh.chopra@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                    },
                    displayName: "arnesh.chopra",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131568/worklog/43760",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T17:50:26.848+0530",
                            updated: "2024-09-13T17:50:26.848+0530",
                            started: "2024-09-13T17:20:22.348+0530",
                            timeSpent: "30m",
                            timeSpentSeconds: 1800,
                            id: "43760",
                            issueId: "131568",
                        },
                    ],
                },
                updated: "2024-09-13T18:02:08.852+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10614",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "In UAT",
                    id: "10614",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131565",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565",
            key: "STAR-61584",
            fields: {
                summary:
                    "Reloading of the records from t_rpdb_contact_details/ t_rpdb_party_property",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                    id: "10003",
                    description: "A small, distinct piece of work.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                    name: "Task",
                    subtask: false,
                    avatarId: 10318,
                    hierarchyLevel: 0,
                },
                created: "2024-09-09T16:43:04.552+0530",
                description:
                    "[^samples_pi_3928.xlsx]\n\nPlease find the samples which need to be reloaded into DL base table t_rpdb_contact_details. Refer the third sheet (Export List_party_id) for unique party_ids that require reloading.\n\nAlso for the party_ids from t_rpdb_party_property : \n\n{{1976453661170620231}} -update\n\n264111809022082024 -extract\n\n{{265162022124082024}} - extract\n\n269056625331082024 -extract\n\n{{259931403914082024}} - extract\n\n8283276131260620211 - extract\n\n{{264644632023082024}} - extract\n\n{{264161706522082024}} - extract",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                    accountId: "63045b8b75b5bbf5e3171702",
                    emailAddress: "arnesh.chopra@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                    },
                    displayName: "arnesh.chopra",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/206942",
                            id: "206942",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "cc: [~accountid:63fcb5120a4a47fb8d20eaea] [~accountid:62f0a96b48e310e672970057] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                                accountId: "63045b8b75b5bbf5e3171702",
                                emailAddress: "arnesh.chopra@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                                },
                                displayName: "arnesh.chopra",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T17:29:35.101+0530",
                            updated: "2024-09-09T17:29:35.101+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/207912",
                            id: "207912",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8b75b5bbf5e3171702] Can you create a table in source, as the query will not fit this many policy_numbers.\ncc : [~accountid:63720823f6c85b343c066990] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T12:46:20.311+0530",
                            updated: "2024-09-11T12:46:20.311+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/208360",
                            id: "208360",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63fcb5120a4a47fb8d20eaea] Kindly do the needful.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T10:27:22.772+0530",
                            updated: "2024-09-12T10:27:22.772+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/208749",
                            id: "208749",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63720823f6c85b343c066990] :- Please use the below Query for data extraction.\n\n\n\nselect CDL_PARTY_ID ,cast(CDL_CONTACT_ID as number(38,0)) as CDL_CONTACT_ID ,CDL_EFFECTIVE_START_DATE,CDL_EFFECTIVE_END_DATE ,CDL_CREATED_ON_DATE_TIMESTAMP ,CDL_CREATED_ON_DATE,CDL_CREATED_ON_TIME ,CDL_CREATED_BY  ,CDL_UPDATED_ON_DATE_TIMESTAMP   ,CDL_UPDATED_ON_DATE,CDL_UPDATED_ON_TIME  ,CDL_UPDATED_BY  ,CDL_COL1 ,CDL_COL2 ,CDL_COL3 ,CDL_COL4 ,CDL_COL5 ,CDL_COL6 ,CDL_COL7 ,CDL_COL8 ,CDL_COL9 ,CDL_COL10,CDL_COL11,CDL_COL12,CDL_COL13,CDL_COL14,CDL_COL15,CDL_COL16,CDL_COL17,CDL_COL18,CDL_COL19,CDL_COL20,CDL_COL21,CDL_COL22,CDL_COL23,CDL_COL24,CDL_COL25,CDL_COL26,CDL_COL27,CDL_COL28,CDL_COL29,CDL_COL30,CDL_COL31,CDL_COL32,CDL_COL33,CDL_COL34,CDL_COL35,CDL_COL36,CDL_COL37,CDL_COL38,CDL_COL39,CDL_COL40,CDL_COL41,CDL_COL42,CDL_COL43,CDL_COL44,CDL_COL45,CDL_COL46,CDL_COL47,CDL_COL48,CDL_COL49,CDL_COL50,CDL_COL51,CDL_COL52,CDL_COL53,CDL_COL54,CDL_COL55,CDL_COL56,CDL_COL57,CDL_COL58,CDL_COL59,CDL_COL60,CDL_COL61,CDL_COL62,CDL_COL63,CDL_COL64,CDL_COL65,CDL_COL66,CDL_COL67,CDL_COL68,CDL_COL69,CDL_COL70,CDL_COL71,CDL_COL72,CDL_COL73,CDL_COL74,CDL_COL75,CDL_COL76,CDL_COL77,CDL_COL78,CDL_COL79,CDL_COL80,CDL_COL81,CDL_COL82,CDL_COL83,CDL_COL84,CDL_COL85,CDL_COL86,CDL_COL87,CDL_COL88,CDL_COL89,CDL_COL90,CDL_COL91,CDL_COL92,CDL_COL93,CDL_COL94,CDL_COL95,CDL_COL96,CDL_COL97,CDL_COL98,CDL_COL99,CDL_COL100,CDL_COL101,CDL_COL102,CDL_COL103,CDL_COL104,CDL_COL105,CDL_COL106,CDL_COL107,CDL_COL108,CDL_COL109,CDL_COL110,CDL_COL111,CDL_COL112,CDL_COL113,CDL_COL114,CDL_COL115,CDL_COL116,CDL_COL117,CDL_COL118,CDL_COL119,CDL_COL120,CDL_COL121,CDL_COL122,CDL_COL123,CDL_COL124,CDL_COL125,CDL_COL126,CDL_COL127,CDL_COL128,CDL_COL129,CDL_COL130,CDL_COL131,CDL_COL132,CDL_COL133,CDL_COL134,CDL_COL135,CDL_COL136,CDL_COL137,CDL_COL138,CDL_COL139,CDL_COL140,CDL_COL141,CDL_COL142,CDL_COL143,CDL_COL144,CDL_COL145,CDL_COL146,CDL_COL147,CDL_COL148,CDL_COL149,CDL_COL150,CDL_COL151,CDL_COL152,CDL_COL153,CDL_COL154,CDL_COL155,CDL_COL156,CDL_COL157,CDL_COL158,CDL_COL159,CDL_COL160,CDL_COL161,CDL_COL162,CDL_COL163,CDL_COL164,CDL_COL165,CDL_COL166,CDL_COL167,CDL_COL168,CDL_COL169,CDL_COL170,CDL_COL171,CDL_COL172,CDL_COL173,CDL_COL174,CDL_COL175,CDL_COL176,CDL_COL177,CDL_COL178,CDL_COL179,CDL_COL180,CDL_COL181,CDL_COL182,CDL_COL183,CDL_COL184,CDL_COL185,CDL_COL186,CDL_COL187,CDL_COL188,CDL_COL189,CDL_COL190,CDL_COL191,CDL_COL192,CDL_COL193,CDL_COL194,CDL_COL195,CDL_COL196,CDL_COL197,CDL_COL198,CDL_COL199,CDL_COL200,CDL_COL201,CDL_COL202,CDL_COL203,CDL_COL204,CDL_COL205,CDL_COL206,CDL_COL207,CDL_COL208,CDL_COL209,CDL_COL210,CDL_COL211,CDL_COL212,CDL_COL213,CDL_COL214,CDL_COL215,CDL_COL216,CDL_COL217,CDL_COL218,CDL_COL219,CDL_COL220,CDL_COL221,CDL_COL222,CDL_COL223,CDL_COL224,CDL_COL225,CDL_COL226,CDL_COL227,CDL_COL228,CDL_COL229,CDL_COL230,CDL_COL231,CDL_COL232,CDL_COL233,CDL_COL234,CDL_COL235,CDL_COL236,CDL_COL237,CDL_COL238,CDL_COL239,CDL_COL240,CDL_COL241,CDL_COL242,CDL_COL243,CDL_COL244,CDL_COL245,CDL_COL246,CDL_COL247,CDL_COL248,CDL_COL249,CDL_COL250,CDL_COL251,CDL_COL252,CDL_COL253,CDL_COL254,CDL_COL255,CDL_COL256,CDL_COL257,CDL_COL258,CDL_COL259,CDL_COL260,CDL_COL261,CDL_COL262,CDL_COL263,CDL_COL264,CDL_COL265,CDL_COL266,CDL_COL267,CDL_COL268,CDL_COL269,CDL_COL270,CDL_COL271,CDL_COL272,CDL_COL273,CDL_COL274,CDL_COL275,CDL_COL276,CDL_COL277,CDL_COL278,CDL_COL279,CDL_COL280,CDL_COL281,CDL_COL282,CDL_COL283,CDL_COL284,CDL_COL285,CDL_COL286,CDL_COL287,CDL_COL288,CDL_COL289,CDL_COL290,CDL_COL291,CDL_COL292,CDL_COL293,CDL_COL294,CDL_COL295,CDL_COL296,CDL_COL297,CDL_COL298,CDL_COL299,CDL_COL300,CDL_COL301,CDL_COL302,CDL_COL303,CDL_COL304,CDL_COL305,CDL_COL306,CDL_COL307,CDL_COL308,CDL_COL309,CDL_COL310,CDL_COL311,CDL_COL312,CDL_COL313,CDL_COL314,CDL_COL315,CDL_COL316,CDL_COL317,CDL_COL318,CDL_COL319,CDL_COL320,CDL_COL321,CDL_COL322,CDL_COL323,CDL_COL324,CDL_COL325,CDL_COL326,CDL_COL327,CDL_COL328,CDL_COL329,CDL_COL330,CDL_COL331,CDL_COL332,CDL_COL333,CDL_COL334,CDL_COL335,CDL_COL336,CDL_COL337,CDL_COL338,CDL_COL339,CDL_COL340,CDL_COL341,CDL_COL342,CDL_COL343,CDL_COL344,CDL_COL345,CDL_COL346,CDL_COL347,CDL_COL348,CDL_COL349,CDL_COL350,CDL_COL351,CDL_COL352,CDL_COL353,CDL_COL354,CDL_COL355,CDL_COL356,CDL_COL357,CDL_COL358,CDL_COL359,CDL_COL360,CDL_COL361,CDL_COL362,CDL_COL363,CDL_COL364,CDL_COL365,CDL_COL366,CDL_COL367,CDL_COL368,CDL_COL369,CDL_COL370,CDL_COL371,CDL_COL372,CDL_COL373,CDL_COL374,CDL_COL375,CDL_COL376,CDL_COL377,CDL_COL378,CDL_COL379,CDL_COL380,CDL_COL381,CDL_COL382,CDL_COL383,CDL_COL384,CDL_COL385,CDL_COL386,CDL_COL387,CDL_COL388,CDL_COL389,CDL_COL390,CDL_COL391,CDL_COL392,CDL_COL393,CDL_COL394,CDL_COL395,CDL_COL396,CDL_COL397,CDL_COL398,CDL_COL399,CDL_COL400,CDL_COL401,CDL_COL402,CDL_COL403,CDL_COL404,CDL_COL405,CDL_COL406,CDL_COL407,CDL_COL408,CDL_COL409,CDL_COL410,CDL_COL411,CDL_COL412,CDL_COL413,CDL_COL414,CDL_COL415,CDL_COL416,CDL_COL417,CDL_COL418,CDL_COL419,CDL_COL420,CDL_COL421,CDL_COL422,CDL_COL423,CDL_COL424,CDL_COL425,CDL_COL426,CDL_COL427,CDL_COL428,CDL_COL429,CDL_COL430,CDL_COL431,CDL_COL432,CDL_COL433,CDL_COL434,CDL_COL435,CDL_COL436,CDL_COL437,CDL_COL438,CDL_COL439,CDL_COL440,CDL_COL441,CDL_COL442,CDL_COL443,CDL_COL444,CDL_COL445,CDL_COL446,CDL_COL447,CDL_COL448,CDL_COL449,CDL_COL450,CDL_COL451,CDL_COL452,CDL_COL453,CDL_COL454,CDL_COL455,CDL_COL456,CDL_COL457,CDL_COL458,CDL_COL459,CDL_COL460,CDL_COL461,CDL_COL462,CDL_COL463,CDL_COL464,CDL_COL465,CDL_COL466,CDL_COL467,CDL_COL468,CDL_COL469,CDL_COL470,CDL_COL471,CDL_COL472,CDL_COL473,CDL_COL474,CDL_COL475,CDL_COL476,CDL_COL477,CDL_COL478,CDL_COL479,CDL_COL480,CDL_COL481,CDL_COL482,CDL_COL483,CDL_COL484,CDL_COL485,CDL_COL486,CDL_COL487,CDL_COL488,CDL_COL489,CDL_COL490,CDL_COL491,CDL_COL492,CDL_COL493,CDL_COL494,CDL_COL495,CDL_COL496,CDL_COL497,CDL_COL498,CDL_COL499,CDL_COL500,CDL_COL501,CDL_COL502,CDL_COL503,CDL_COL504,CDL_COL505,CDL_COL506,CDL_COL507,CDL_COL508,CDL_COL509,CDL_COL510,CDL_COL511,CDL_COL512,CDL_COL513,CDL_COL514,CDL_COL515,CDL_COL516,CDL_COL517,CDL_COL518,CDL_COL519,CDL_COL520,CDL_COL521,CDL_COL522,CDL_COL523,CDL_COL524,CDL_COL525,CDL_COL526,CDL_COL527,CDL_COL528,CDL_COL529,CDL_COL530,CDL_COL531,CDL_COL532,CDL_COL533,CDL_COL534,CDL_COL535,CDL_COL536,CDL_COL537,CDL_COL538,CDL_COL539,CDL_COL540,CDL_COL541,CDL_COL542,CDL_COL543,CDL_COL544,CDL_COL545,CDL_COL546,CDL_COL547,CDL_COL548,CDL_COL549,CDL_COL550,CDL_COL551,CDL_COL552,CDL_COL553,CDL_COL554,CDL_COL555,CDL_COL556,CDL_COL557,CDL_COL558,CDL_COL559,CDL_COL560,CDL_COL561,CDL_COL562,CDL_COL563,CDL_COL564,CDL_COL565,CDL_COL566,CDL_COL567,CDL_COL568,CDL_COL569,CDL_COL570,CDL_COL571,CDL_COL572,CDL_COL573,CDL_COL574,CDL_COL575,CDL_COL576,CDL_COL577,CDL_COL578,CDL_COL579,CDL_COL580,CDL_COL581,CDL_COL582,CDL_COL583,CDL_COL584,CDL_COL585,CDL_COL586,CDL_COL587,CDL_COL588,CDL_COL589,CDL_COL590,CDL_COL591,CDL_COL592,CDL_COL593,CDL_COL594,CDL_COL595,CDL_COL596,CDL_COL597,CDL_COL598,CDL_COL599,CDL_COL600,CDL_COL601,CDL_COL602,CDL_COL603,CDL_COL604,CDL_COL605,CDL_COL606,CDL_COL607,CDL_COL608,CDL_COL609,CDL_COL610,CDL_COL611,CDL_COL612,CDL_COL613,CDL_COL614,CDL_COL615,CDL_COL616,CDL_COL617,CDL_COL618,CDL_COL619,CDL_COL620,CDL_COL621,CDL_COL622,CDL_COL623,CDL_COL624,CDL_COL625,CDL_COL626,CDL_COL627,CDL_COL628,CDL_COL629,CDL_COL630,CDL_COL631,CDL_COL632,CDL_COL633,CDL_COL634,CDL_COL635,CDL_COL636,CDL_COL637,CDL_COL638,CDL_COL639,CDL_COL640,CDL_COL641,CDL_COL642,CDL_COL643,CDL_COL644,CDL_COL645,CDL_COL646,CDL_COL647,CDL_COL648,CDL_COL649,CDL_COL650,CDL_COL651,CDL_COL652,CDL_COL653,CDL_COL654,CDL_COL655,CDL_COL656,CDL_COL657,CDL_COL658,CDL_COL659,CDL_COL660,CDL_COL661,CDL_COL662,CDL_COL663,CDL_COL664,CDL_COL665,CDL_COL666,CDL_COL667,CDL_COL668,CDL_COL669,CDL_COL670,CDL_COL671,CDL_COL672,CDL_COL673,CDL_COL674,CDL_COL675,CDL_COL676,CDL_COL677,CDL_COL678,CDL_COL679,CDL_COL680,CDL_COL681,CDL_COL682,CDL_COL683,CDL_COL684,CDL_COL685,CDL_COL686,CDL_COL687,CDL_COL688,CDL_COL689,CDL_COL690,CDL_COL691,CDL_COL692,CDL_COL693,CDL_COL694,CDL_COL695,CDL_COL696,CDL_COL697,CDL_COL698,CDL_COL699,CDL_COL700,CDL_COL701,CDL_COL702,CDL_COL703,CDL_COL704,CDL_COL705,CDL_COL706,CDL_COL707,CDL_COL708,CDL_COL709,CDL_COL710,CDL_COL711,CDL_COL712,CDL_COL713,CDL_COL714,CDL_COL715,CDL_COL716,CDL_COL717,CDL_COL718,CDL_COL719,CDL_COL720,CDL_COL721,CDL_COL722,CDL_COL723,CDL_COL724,CDL_COL725,CDL_COL726,CDL_COL727,CDL_COL728,CDL_COL729,CDL_COL730,CDL_COL731,CDL_COL732,CDL_COL733,CDL_COL734,CDL_COL735,CDL_COL736,CDL_COL737,CDL_COL738,CDL_COL739,CDL_COL740,CDL_COL741,CDL_COL742,CDL_COL743,CDL_COL744,CDL_COL745,CDL_COL746,CDL_COL747,CDL_COL748,CDL_COL749,CDL_COL750,CDL_COL751,CDL_COL752,CDL_COL753,CDL_COL754,CDL_COL755,CDL_COL756,CDL_COL757,CDL_COL758,CDL_COL759,CDL_COL760,CDL_COL761,CDL_COL762,CDL_COL763,CDL_COL764,CDL_COL765,CDL_COL766,CDL_COL767,CDL_COL768,CDL_COL769,CDL_COL770,CDL_COL771,CDL_COL772,CDL_COL773,CDL_COL774,CDL_COL775,CDL_COL776,CDL_COL777,CDL_COL778,CDL_COL779,CDL_COL780,CDL_COL781,CDL_COL782,CDL_COL783,CDL_COL784,CDL_COL785,CDL_COL786,CDL_COL787,CDL_COL788,CDL_COL789,CDL_COL790,CDL_COL791,CDL_COL792,CDL_COL793,CDL_COL794,CDL_COL795,CDL_COL796,CDL_COL797,CDL_COL798,CDL_COL799,CDL_COL800,CDL_COL801,CDL_COL802,CDL_COL803,CDL_COL804,CDL_COL805,CDL_COL806,CDL_COL807,CDL_COL808,CDL_COL809,CDL_COL810,CDL_COL811,CDL_COL812,CDL_COL813,CDL_COL814,CDL_COL815,CDL_COL816,CDL_COL817,CDL_COL818,CDL_COL819,CDL_COL820,CDL_COL821,CDL_COL822,CDL_COL823,CDL_COL824,CDL_COL825,CDL_COL826,CDL_COL827,CDL_COL828,CDL_COL829,CDL_COL830,CDL_COL831,CDL_COL832,CDL_COL833,CDL_COL834,CDL_COL835,CDL_COL836,CDL_COL837,CDL_COL838,CDL_COL839,CDL_COL840,CDL_COL841,CDL_COL842,CDL_COL843,CDL_COL844,CDL_COL845,CDL_COL846,CDL_COL847,CDL_COL848,CDL_COL849,CDL_COL850,CDL_COL851,CDL_COL852,CDL_COL853,CDL_COL854,CDL_COL855,CDL_COL856,CDL_COL857,CDL_COL858,CDL_COL859,CDL_COL860,CDL_COL861,CDL_COL862,CDL_COL863,CDL_COL864,CDL_COL865,CDL_COL866,CDL_COL867,CDL_COL868,CDL_COL869,CDL_COL870,CDL_COL871,CDL_COL872,CDL_COL873,CDL_COL874,CDL_COL875,CDL_COL876,CDL_COL877,CDL_COL878,CDL_COL879,CDL_COL880,CDL_COL881,CDL_COL882,CDL_COL883,CDL_COL884,CDL_COL885,CDL_COL886,CDL_COL887,CDL_COL888,CDL_COL889,CDL_COL890,CDL_COL891,CDL_COL892,CDL_COL893,CDL_COL894,CDL_COL895,CDL_COL896,CDL_COL897,CDL_COL898,CDL_COL899,CDL_COL900,a.rowid as ROW_ID,CAST(NULL as varchar(4000)) as ROW_ID2,CAST(NULL as NUMBER(20)) as PARTY_ID,CAST(NULL as NUMBER(20)) as PARTY_HISTORY_ID,CAST(NULL as VARCHAR2(20)) as EVENT_KEYWORD,CAST(NULL as VARCHAR2(20)) as FOLLOWUP_EVENT,CAST(NULL as DATE) as FOLLOWUP_TIMESTAMP from T_RPDB_CONTACT_DETAILS a\nwhere cdl_party_id in (select policy from IIMS_REP.DL_1104 where policy <>'AA0029067626');",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T15:44:24.312+0530",
                            updated: "2024-09-12T15:44:24.312+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/209391",
                            id: "209391",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63fcb5120a4a47fb8d20eaea] \n\nData has been patched for T_RPDB_CONTACT_DETAILS",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T15:46:39.781+0530",
                            updated: "2024-09-13T15:46:39.781+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/209395",
                            id: "209395",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63720823f6c85b343c066990] :- Please use the below Query to patch the 't_rpdb_party_property ' table\n\nselect a.*,a.rowid as ROW_ID,CAST(NULL as varchar(4000)) as ROW_ID2,CAST(NULL as NUMBER(20)) as PARTY_ID,CAST(NULL as NUMBER(20)) as PARTY_HISTORY_ID,CAST(NULL as VARCHAR2(20)) as EVENT_KEYWORD,CAST(NULL as VARCHAR2(20)) as FOLLOWUP_EVENT,CAST(NULL as DATE) as FOLLOWUP_TIMESTAMP from T_RPDB_PARTY_PROPERTY a  where a.pty_party_id in ('1976453661170620231','264111809022082024','265162022124082024','269056625331082024','259931403914082024','8283276131260620211','264644632023082024 ','264161706522082024');",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T15:48:55.253+0530",
                            updated: "2024-09-13T15:48:55.253+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/209627",
                            id: "209627",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63fcb5120a4a47fb8d20eaea] \n\nPatched data",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T19:23:11.152+0530",
                            updated: "2024-09-13T19:23:11.152+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/209628",
                            id: "209628",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "QA complete",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T19:23:30.493+0530",
                            updated: "2024-09-13T19:23:30.493+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/209629",
                            id: "209629",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "QA complete",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T19:23:42.175+0530",
                            updated: "2024-09-13T19:23:42.175+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/209704",
                            id: "209704",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Data patched",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-14T15:07:18.375+0530",
                            updated: "2024-09-14T15:07:18.375+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment/209705",
                            id: "209705",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Ok",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-14T15:07:28.166+0530",
                            updated: "2024-09-14T15:07:28.166+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/comment",
                    maxResults: 11,
                    total: 11,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8b75b5bbf5e3171702",
                    accountId: "63045b8b75b5bbf5e3171702",
                    emailAddress: "arnesh.chopra@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/729d1e489dff1e1104641ac68c5dafd9?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                    },
                    displayName: "arnesh.chopra",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 2,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/worklog/43752",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T15:46:50.920+0530",
                            updated: "2024-09-13T15:46:50.920+0530",
                            started: "2024-09-13T12:46:47.097+0530",
                            timeSpent: "3h",
                            timeSpentSeconds: 10800,
                            id: "43752",
                            issueId: "131565",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131565/worklog/43770",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T19:23:15.648+0530",
                            updated: "2024-09-13T19:23:15.648+0530",
                            started: "2024-09-13T17:23:13.081+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43770",
                            issueId: "131565",
                        },
                    ],
                },
                updated: "2024-09-14T15:07:30.852+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/6",
                    description:
                        "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/closed.png",
                    name: "Closed",
                    id: "6",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131394",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394",
            key: "STAR-61422",
            fields: {
                summary: "Adding branch code to agg_fm_policy_info",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                    id: "10002",
                    description: "Functionality or a feature expressed as a user goal.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    name: "Story",
                    subtask: false,
                    avatarId: 10315,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49450",
                    key: "STAR-9317",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49450",
                    fields: {
                        summary: "Epic for data curation and aggregate",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-09T09:55:49.029+0530",
                description:
                    "+*Details*+:\n\n# Table name : agg_fm_policy_info\n# Name of new column : branch_code\n# Logic of new column : Refer to attached updated SSM.   \n\n[Fraud Mart - Data Engineering - Confluence (atlassian.net)|https://starhealthinsurance.atlassian.net/wiki/spaces/DE/pages/179175453/Fraud+Mart]\n\n# Move to SQL table? : Yes",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Ae807e9b3-efe1-488f-85cb-57c66e0cfd04",
                    accountId: "712020:e807e9b3-efe1-488f-85cb-57c66e0cfd04",
                    emailAddress: "s.saran@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/8b9193d277b7aa40f9009198ed17c1e6?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png",
                    },
                    displayName: "SARAN S",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/208715",
                            id: "208715",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Hi [~accountid:630c99486a8bb4eda6768fbd], Development complete and data loaded in UAT.  Kindly validate.\n\nTest artifacts at [https://starhealthinsurance.atlassian.net/browse/STAR-61924?focusedCommentId=208713|https://starhealthinsurance.atlassian.net/browse/STAR-61924?focusedCommentId=208713|smart-link] \n\n[~accountid:6399b7a9abc764d2ca5f3984] As we have to move the BRANCH_CODE column to SQL Server. Kindly create the column in ETL and Final Table\n\nCC: [~accountid:63045b8e6acf9eeb443dbf0b] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T15:09:51.237+0530",
                            updated: "2024-09-12T15:09:51.237+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/208731",
                            id: "208731",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=630c99486a8bb4eda6768fbd",
                                accountId: "630c99486a8bb4eda6768fbd",
                                emailAddress: "v.alexpandian@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                },
                                displayName: "v.alexpandian",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Hi [~accountid:712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59] Data looks fine. We can move it to production.\n\n[~accountid:62ce6092a94a6f9c0efea08f] [~accountid:6399b7a9abc764d2ca5f3984] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=630c99486a8bb4eda6768fbd",
                                accountId: "630c99486a8bb4eda6768fbd",
                                emailAddress: "v.alexpandian@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                                },
                                displayName: "v.alexpandian",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T15:22:38.779+0530",
                            updated: "2024-09-12T15:22:38.779+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/208947",
                            id: "208947",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Hi [~accountid:630c99486a8bb4eda6768fbd] [~accountid:62ce6092a94a6f9c0efea08f] [~accountid:6399b7a9abc764d2ca5f3984]  Changes deployed in production. Full refresh done only in Data Lake. \n\nBRANCH_CODE also added to SQL Server pipelines, so BRANCH_CODE will be present only for incremental data.\n\nTest artifacts: [https://starhealthinsurance.atlassian.net/browse/STAR-61928?focusedCommentId=208866|https://starhealthinsurance.atlassian.net/browse/STAR-61928?focusedCommentId=208866|smart-link] \n\n\n\ncc: [~accountid:63045b8e6acf9eeb443dbf0b] [~accountid:63045b8f8474ff0a80ac47bd] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T18:14:10.125+0530",
                            updated: "2024-09-12T18:19:11.794+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/209207",
                            id: "209207",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "The story is deployed. Post deployment kindly check these points as well - \r\n1. Since new column Branch_Code is added make sure that view is recreated in databricks as well.\r\n2. When column is added in SQL server make sure that the data is refreshed else the value of column will be null for previous records.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:24:09.490+0530",
                            updated: "2024-09-13T12:24:09.490+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/209208",
                            id: "209208",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "QA completed.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:24:26.128+0530",
                            updated: "2024-09-13T12:24:26.128+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/209209",
                            id: "209209",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "UAT completed.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:24:38.818+0530",
                            updated: "2024-09-13T12:24:38.818+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/209210",
                            id: "209210",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Story is ready to release.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:25:02.828+0530",
                            updated: "2024-09-13T12:25:02.828+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment/209211",
                            id: "209211",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "The story is deployed.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T12:25:15.698+0530",
                            updated: "2024-09-13T12:25:15.698+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131394/comment",
                    maxResults: 8,
                    total: 8,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=630c99486a8bb4eda6768fbd",
                    accountId: "630c99486a8bb4eda6768fbd",
                    emailAddress: "v.alexpandian@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/b9ce51241b61e4bdab046661b0f3f609?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-5.png",
                    },
                    displayName: "v.alexpandian",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-13T12:25:15.711+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "Ready to Release",
                    id: "10615",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131025",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025",
            key: "STAR-61085",
            fields: {
                summary: "BigQuery- Addition of tables for Google Ads",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                    id: "10003",
                    description: "A small, distinct piece of work.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                    name: "Task",
                    subtask: false,
                    avatarId: 10318,
                    hierarchyLevel: 0,
                },
                parent: {
                    id: "49446",
                    key: "STAR-9315",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/49446",
                    fields: {
                        summary: "Epic for Data Ingestion from source to Data Lake storage",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                            description: "",
                            iconUrl: "https://starhealthinsurance.atlassian.net/",
                            name: "To Do",
                            id: "10003",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                                id: 2,
                                key: "new",
                                colorName: "blue-gray",
                                name: "To Do",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10000",
                            id: "10000",
                            description:
                                "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/issuetypes/epic.svg",
                            name: "Epic",
                            subtask: false,
                            hierarchyLevel: 1,
                        },
                    },
                },
                created: "2024-09-04T15:58:49.789+0530",
                description:
                    "Below is the Schema to be add:\n\nGoogle Ads - 109 Tables.\n\nPlease refer to the SSM link below for more details:\n\n[Google Ads SSM - Data Engineering - Confluence (atlassian.net)|https://starhealthinsurance.atlassian.net/wiki/spaces/DE/pages/744587433/Google+Ads+SSM] \n\nFrequency - Weekly (Monday)",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A251d7370-c837-4efa-9d60-7769841aca3a",
                    accountId: "712020:251d7370-c837-4efa-9d60-7769841aca3a",
                    emailAddress: "aniket.adhav@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                    },
                    displayName: "aniket.adhav",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/1",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/highest.svg",
                    name: "Highest",
                    id: "1",
                },
                labels: [],
                duedate: "2024-09-11",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/206005",
                            id: "206005",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8f56918451890432ca] :- We need to configure all these tables under the ΓÇÿmartech_big_queryΓÇÖ schema.\n\nCC :- [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-06T11:45:41.633+0530",
                            updated: "2024-09-06T11:45:41.633+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/206396",
                            id: "206396",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63fcb5120a4a47fb8d20eaea] \n\nCould you please also share the information on what type of tables these will be (SCD0, SCD1) and if SCD1 Delta then the Primary Key information. Also, the dataset name.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-08T22:12:25.255+0530",
                            updated: "2024-09-09T07:09:01.451+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/206604",
                            id: "206604",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8f56918451890432ca] :- All tables under the SCD0 only.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T12:57:27.366+0530",
                            updated: "2024-09-09T12:57:27.366+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/206605",
                            id: "206605",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63fcb5120a4a47fb8d20eaea] \n\nWhat about the Dataset name. Because while querying we need to pass the datasetname.table_name.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T12:58:40.795+0530",
                            updated: "2024-09-09T12:58:40.795+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/207035",
                            id: "207035",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8f56918451890432ca] :- Please find the details.\n\n.google_ads_star.<table_name>",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T18:45:44.762+0530",
                            updated: "2024-09-09T18:45:44.762+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/207263",
                            id: "207263",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: '[~accountid:63fcb5120a4a47fb8d20eaea] \n\nI am getting access denied on the objects.\n\n!image-20240910-073818.png|width=1081,height=646,alt="image-20240910-073818.png"!\n\nPlease check once. I believe you need to provide dataset level access.',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T13:08:46.756+0530",
                            updated: "2024-09-10T13:08:46.756+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/207598",
                            id: "207598",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Dear [~accountid:62f0a96a48e310e672970056] :- Please check and update the same.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63fcb5120a4a47fb8d20eaea",
                                accountId: "63fcb5120a4a47fb8d20eaea",
                                emailAddress: "gorantla.venubabu@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/aa9382f04d61801c8b706b66127e604a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVG-6.png",
                                },
                                displayName: "VENU BABU GORANTLA",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T17:35:26.745+0530",
                            updated: "2024-09-10T17:35:26.745+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/208010",
                            id: "208010",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96a48e310e672970056",
                                accountId: "62f0a96a48e310e672970056",
                                emailAddress: "abhishek.dubey@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                },
                                displayName: "Abhishek Dubey",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8f56918451890432ca]  : Please check now .\n\n[~accountid:63fcb5120a4a47fb8d20eaea] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96a48e310e672970056",
                                accountId: "62f0a96a48e310e672970056",
                                emailAddress: "abhishek.dubey@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/077bba03ce287b5bfa62ff9ed79eb52d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAD-4.png",
                                },
                                displayName: "Abhishek Dubey",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T14:37:00.456+0530",
                            updated: "2024-09-11T14:37:00.456+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/208101",
                            id: "208101",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:62f0a96a48e310e672970056] \n\nWe can access now.\n\ncc: [~accountid:63fcb5120a4a47fb8d20eaea] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T15:41:49.089+0530",
                            updated: "2024-09-11T15:41:49.089+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/208342",
                            id: "208342",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63fcb5120a4a47fb8d20eaea] \n\nWe have prepared the configs. We will be starting the data loading today.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T10:04:02.385+0530",
                            updated: "2024-09-12T10:04:02.385+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment/208950",
                            id: "208950",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:251d7370-c837-4efa-9d60-7769841aca3a] \n\nFor following tables, the incremental columns are not given.\n\np_ads_Audience_3503198923 p_ads_AdGroupLabel_3503198923 p_ads_AdGroupBidModifier_3503198923 p_ads_Budget_3503198923 p_ads_CampaignAudience_3503198923 p_ads_Placement_3503198923 p_ads_Gender_3503198923 p_ads_LocationBasedCampaignCriterion_3503198923 p_ads_AdGroupAudience_3503198923 p_ads_AdGroupCriterionLabel_3503198923 p_ads_AssetGroupAsset_3503198923 p_ads_BidGoal_3503198923 p_ads_AdGroup_3503198923 p_ads_ParentalStatus_3503198923 p_ads_Keyword_3503198923 p_ads_CampaignLabel_3503198923 p_ads_AssetGroupSignal_3503198923 p_ads_AdGroupAdLabel_3503198923 p_ads_AssetGroupListingGroupFilter_3503198923 p_ads_CampaignCriterion_3503198923 p_ads_AssetGroup_3503198923 p_ads_Asset_3503198923 p_ads_AdGroupCriterion_3503198923 p_ads_Video_3503198923 p_ads_Customer_3503198923 p_ads_AgeRange_3503198923 p_ads_Ad_3503198923",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T18:17:37.014+0530",
                            updated: "2024-09-12T18:17:37.014+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/comment",
                    maxResults: 11,
                    total: 11,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A251d7370-c837-4efa-9d60-7769841aca3a",
                    accountId: "712020:251d7370-c837-4efa-9d60-7769841aca3a",
                    emailAddress: "aniket.adhav@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/2f0869d95e78a97ada1a57d7d2d9cf08?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-2.png",
                    },
                    displayName: "aniket.adhav",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131025/worklog/43486",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            comment: "Analyzing Requirement",
                            created: "2024-09-09T07:11:49.736+0530",
                            updated: "2024-09-09T07:11:49.736+0530",
                            started: "2024-09-06T06:52:00.000+0530",
                            timeSpent: "20m",
                            timeSpentSeconds: 1200,
                            id: "43486",
                            issueId: "131025",
                        },
                    ],
                },
                updated: "2024-09-12T18:17:41.760+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10606",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "In Dev",
                    id: "10606",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131001",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131001",
            key: "STAR-61062",
            fields: {
                summary: "Post Deployment Validation",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:40:12.079+0530",
                description: "Post Deployment Validation",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131001/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-04T12:40:53.794+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "131000",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131000",
            key: "STAR-61061",
            fields: {
                summary: "Deployment Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:39:39.229+0530",
                description: "Deployment Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: null,
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/131000/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-04T12:40:51.448+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130998",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130998",
            key: "STAR-61059",
            fields: {
                summary: "Deployment",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:39:06.150+0530",
                description: "Deployment",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130998/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 2,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130998/worklog/43758",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T17:39:48.027+0530",
                            updated: "2024-09-13T17:39:48.027+0530",
                            started: "2024-09-13T14:09:42.422+0530",
                            timeSpent: "3h 30m",
                            timeSpentSeconds: 12600,
                            id: "43758",
                            issueId: "130998",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130998/worklog/43762",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T18:08:13.323+0530",
                            updated: "2024-09-13T18:08:13.323+0530",
                            started: "2024-09-13T17:08:09.687+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43762",
                            issueId: "130998",
                        },
                    ],
                },
                updated: "2024-09-13T18:08:13.336+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130997",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130997",
            key: "STAR-61058",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:38:37.241+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-05",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130997/comment/205723",
                            id: "205723",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "review complete",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-05T16:37:41.177+0530",
                            updated: "2024-09-05T16:37:41.177+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130997/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130997/worklog/43444",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-05T16:37:19.403+0530",
                            updated: "2024-09-05T16:37:19.403+0530",
                            started: "2024-09-05T14:37:16.485+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43444",
                            issueId: "130997",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                    accountId: "63720823f6c85b343c066990",
                    emailAddress: "v.yashchilwar@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                    },
                    displayName: "Yash Chilwar",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-05T16:37:41.335+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130996",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130996",
            key: "STAR-61057",
            fields: {
                summary: "Dev validation",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:38:07.276+0530",
                description: "Dev validation",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130996/comment/205691",
                            id: "205691",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: 'Implemented the logic, and moved the data in dds.\nTable names : stage.agg_agent_master_stg , report.agg_agent_master\n\n!image-20240905-103315.png|width=1437,height=790,alt="image-20240905-103315.png"!\n\n\n\n!image-20240905-103406.png|width=1448,height=736,alt="image-20240905-103406.png"!',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-05T16:04:54.084+0530",
                            updated: "2024-09-05T16:04:54.084+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130996/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130996/worklog/43441",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-05T16:05:08.650+0530",
                            updated: "2024-09-05T16:05:08.650+0530",
                            started: "2024-09-05T14:35:04.379+0530",
                            timeSpent: "1h 30m",
                            timeSpentSeconds: 5400,
                            id: "43441",
                            issueId: "130996",
                        },
                    ],
                },
                updated: "2024-09-05T16:05:16.593+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130995",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130995",
            key: "STAR-61056",
            fields: {
                summary: "Development",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:37:35.443+0530",
                description: "Development",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130995/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130995/worklog/43411",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T18:36:30.187+0530",
                            updated: "2024-09-04T18:36:30.187+0530",
                            started: "2024-09-04T14:36:26.874+0530",
                            timeSpent: "4h",
                            timeSpentSeconds: 14400,
                            id: "43411",
                            issueId: "130995",
                        },
                    ],
                },
                updated: "2024-09-04T18:36:30.201+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130994",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130994",
            key: "STAR-61055",
            fields: {
                summary: "Solution Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:37:00.977+0530",
                description: "Solution Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130994/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130994/worklog/43410",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T18:35:33.635+0530",
                            updated: "2024-09-04T18:35:33.635+0530",
                            started: "2024-09-04T16:35:30.458+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43410",
                            issueId: "130994",
                        },
                    ],
                },
                updated: "2024-09-04T18:35:33.648+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130992",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130992",
            key: "STAR-61053",
            fields: {
                summary: "Requirement Gathering",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127981",
                    key: "STAR-58257",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127981",
                    fields: {
                        summary: "DDS Agent Master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                            id: "10003",
                            description: "A small, distinct piece of work.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            name: "Task",
                            subtask: false,
                            avatarId: 10318,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-04T12:36:21.775+0530",
                description: "Requirement Gathering",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130992/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130992/worklog/43387",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T12:42:40.666+0530",
                            updated: "2024-09-04T12:42:40.666+0530",
                            started: "2024-09-04T11:42:34.892+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43387",
                            issueId: "130992",
                        },
                    ],
                },
                updated: "2024-09-04T12:42:40.684+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130868",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868",
            key: "STAR-60939",
            fields: {
                summary:
                    "Change in the view definition of PGIT_POLICY & PGITH_POLICY with given columns in Data Lake ",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                    id: "10003",
                    description: "A small, distinct piece of work.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                    name: "Task",
                    subtask: false,
                    avatarId: 10318,
                    hierarchyLevel: 0,
                },
                created: "2024-09-03T14:51:19.042+0530",
                description:
                    "Change in the view definition of PGIT_POLICY & PGITH_POLICY with given columns in Data Lake.\nPFA sheet,\n\n [^Missing_columns_in_PGIT_POLICY_&_PGITH_POLICY.xlsx] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A861132a9-753a-4929-80e5-316c57dc9298",
                    accountId: "712020:861132a9-753a-4929-80e5-316c57dc9298",
                    emailAddress: "rajashri.chitti@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                    },
                    displayName: "rajashri.chitti",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                    name: "High",
                    id: "2",
                },
                labels: [],
                duedate: "2024-09-05",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/204351",
                            id: "204351",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A861132a9-753a-4929-80e5-316c57dc9298",
                                accountId: "712020:861132a9-753a-4929-80e5-316c57dc9298",
                                emailAddress: "rajashri.chitti@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                },
                                displayName: "rajashri.chitti",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "CC: [~accountid:62f0a96b48e310e672970057] [~accountid:6399b7a9abc764d2ca5f3984] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A861132a9-753a-4929-80e5-316c57dc9298",
                                accountId: "712020:861132a9-753a-4929-80e5-316c57dc9298",
                                emailAddress: "rajashri.chitti@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6384bb920e6f477aaf49b94e387fbfba?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FR-2.png",
                                },
                                displayName: "rajashri.chitti",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-03T14:53:11.181+0530",
                            updated: "2024-09-03T14:53:11.181+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/204761",
                            id: "204761",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63720823f6c85b343c066990] can you pls check",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T10:43:59.378+0530",
                            updated: "2024-09-04T10:43:59.378+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/204852",
                            id: "204852",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:62f0a96b48e310e672970057] \n\nThese columns are not present in base tables",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T11:36:07.068+0530",
                            updated: "2024-09-04T11:36:07.068+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/205132",
                            id: "205132",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63720823f6c85b343c066990] As discussed we are pulling all columns from source and so we need to include the missing columns in view definition. So pls recheck and confirm.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T15:41:13.774+0530",
                            updated: "2024-09-04T15:41:13.774+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/206431",
                            id: "206431",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63720823f6c85b343c066990] any update on the same",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T10:32:54.398+0530",
                            updated: "2024-09-09T10:32:54.398+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/206724",
                            id: "206724",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: '[~accountid:62f0a96b48e310e672970057] \n\n\n\n!image-20240909-093316.png|width=1094,height=364,alt="image-20240909-093316.png"!\n\nchecked in RAW folder POLH_FLEX_01 not present instead PRAIH_FLEX_01 is present.\n\n\n\nQuery:\n\n{noformat}select POLH_FLEX_01\n┬áfrom parquet.`abfss://stardatalake-prod@stardatalakeprod.dfs.core.windows.net/PREMIA/RAW/PGITH_POL_RISK_ADDL_INFO/`{noformat}',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T15:04:31.936+0530",
                            updated: "2024-09-09T15:04:31.936+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/207006",
                            id: "207006",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63720823f6c85b343c066990] Are all other mentioned columns are present in Raw.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T18:20:07.561+0530",
                            updated: "2024-09-09T18:20:07.561+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/208343",
                            id: "208343",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "|SOURCE_NAME|SOURCE_COLUMN_NAME|TARGET_COLUMN_NAME|\n|PGIT_POLICY|POL_FLEX_01|POL_PROPOSAL_FORM_NUMBER|\n|PGIT_POLICY|POL_FLEX_02|POL_PROPOSAL_FORM_DT|\n|PGIT_POLICY|POL_FLEX_03|POL_MAGNA_PROPOSAL_NO|\n|PGIT_POLICY|POL_FLEX_04|POL_MAGNA_PROPOSAL_DT|\n|PGIT_POLICY|POL_FLEX_05|POL_MAGNA_REMARKS|\n|PGIT_POLICY|POL_FLEX_08|POL_LIFE_POLICY_NO|\n|PGIT_POLICY|POL_FLEX_09|POL_LIFE_CUSTOMER_ID|\n|PGIT_POLICY|POL_FLEX_10|POL_LIFE_PROPOSAL_NO|\n|PGIT_POLICY|POL_FLEX_12|POL_PERIOD_2|\n|PGIT_POLICY|POL_FLEX_13|POL_ID_CARD_NO|\n|PGIT_POLICY|POL_FLEX_14|POL_RENEWAL_PROPOSER_CODE|\n|PGIT_POLICY|POL_FLEX_15|POL_ZONE_R_PLAN|\n|PGIT_POLICY|POL_FLEX_18|POL_RENEWAL_YEAR|\n|PGIT_POLICY|POL_FLEX_22|POL_CITY_1|\n|PGIT_POLICY|POL_FLEX_25|POL_WORKFLOW_REMARKS|\n|PGIT_POLICY|POL_FLEX_26|POL_WORKFLOW_ASSIGN|\n|PGIT_POLICY|POL_FLEX_27|POL_WORKFLOW_CODE|\n|PGIT_POLICY|POL_FLEX_28|POL_WORKFLOW_USER_ID|\n|PGIT_POLICY|POL_FLEX_29|POL_WORKFLOW_DOC_SYSTEM|\n|PGIT_POLICY|POL_FLEX_33|POL_DMS_UPDATE|\n|PGIT_POLICY|POL_FLEX_35|POL_RELATIONSHIP_WITH_INSURED|\n|PGIT_POLICY|POL_FLEX_36|POL_SMS_SENT_DT|\n|PGIT_POLICY|POL_FLEX_37|POL_WORKFLOW_APPR_TIME|\n|PGIT_POLICY|POL_FLEX_40|POL_BACK_DT_RECEIPT_DT|\n|PGIT_POLICY|POL_FLEX_48|POL_BANK_CODE|\n|PGIT_POLICY|POL_FLEX_49|POL_BANK_BRANCH_CODE|\n|PGIT_POLICY|POL_FLEX_50|POL_INDUSTRY_TYPE|\n|PGIT_POLICY|POL_FLEX_51|POL_INDUSTRY_TYPE_REMARKS|\n|PGIT_POLICY|POL_FLEX_58|POL_SM_CODE|\n|PGIT_POLICY|POL_FLEX_59|POL_SP_CODE|\n|PGIT_POLICY|POL_FLEX_60|POL_CERTIFICATE_GEN_NO|\n|PGIT_POLICY|POL_FLEX_68|POL_GROUP_SIZE|\n|PGIT_POLICY|POL_FLEX_76|POL_BANK_EMPLOYEE|\n|PGIT_POLICY|POL_FLEX_78|POL_BASE_INFO_REMARKS|\n|PGIT_POLICY|POL_FLEX_80|POL_SMS_DT|\n|PGIT_POLICY|POL_FLEX_DT_01|POL_PROPOSAL_RECEIVED_DT|\n|PGIT_POLICY|POL_FLEX_NUM_04|POL_INTERMEDIARY_NUM|\n|PGIT_POLICY|POL_FLEX_NUM_05|POL_FULFILER|\n|PGIT_POLICY|POL_FLEX_YN_03|POL_I_KNOW_THE_CUSTOMER|\n|PGIT_POLICY|POL_FLEX_YN_05|POL_FRESH|\n|PGIT_POLICY|POL_FLEX_YN_06|POL_OWN_OFFICE_RENEWAL|\n|PGIT_POLICY|POL_FLEX_YN_07|POL_OTHER_OFFICE_RENEWAL|\n|PGIT_POLICY|POL_FLEX_YN_08|POL_PORTABILITY|\n\n[~accountid:62f0a96b48e310e672970057] \n\nThese columns are present but with different  names",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T10:05:10.358+0530",
                            updated: "2024-09-12T10:12:42.826+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/209280",
                            id: "209280",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63720823f6c85b343c066990] Pls share the same for PGITH_POLICY and is it renamed based dim_statis_master_premia.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                                accountId: "62f0a96b48e310e672970057",
                                emailAddress: "jitendrakumar.patel@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                                },
                                displayName: "jitendrakumar.patel",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T13:30:58.746+0530",
                            updated: "2024-09-13T13:30:58.746+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment/209289",
                            id: "209289",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:62f0a96b48e310e672970057] \n\n|SOURCE_NAME|SOURCE_COLUMN_NAME|TARGET_COLUMN_NAME|\n|PGITH_POLICY|POLH_FLEX_01|POL_PROPOSAL_FORM_NUMBER|\n|PGITH_POLICY|POLH_FLEX_02|POL_PROPOSAL_FORM_DT|\n|PGITH_POLICY|POLH_FLEX_03|POL_MAGNA_PROPOSAL_NO|\n|PGITH_POLICY|POLH_FLEX_04|POL_MAGNA_PROPOSAL_DT|\n|PGITH_POLICY|POLH_FLEX_05|POL_MAGNA_REMARKS|\n|PGITH_POLICY|POLH_FLEX_08|POL_LIFE_POLICY_NO|\n|PGITH_POLICY|POLH_FLEX_09|POL_LIFE_CUSTOMER_ID|\n|PGITH_POLICY|POLH_FLEX_10|POL_LIFE_PROPOSAL_NO|\n|PGITH_POLICY|POLH_FLEX_12|POL_PERIOD_1|\n|PGITH_POLICY|POLH_FLEX_13|POL_ID_CARD_NO|\n|PGITH_POLICY|POLH_FLEX_14|POL_RENEWAL_PROPOSER_CODE|\n|PGITH_POLICY|POLH_FLEX_15|POL_ZONE_R_PLAN|\n|PGITH_POLICY|POLH_FLEX_18|POL_RENEWAL_YEAR|\n|PGITH_POLICY|POLH_FLEX_22|POL_CITY_1|\n|PGITH_POLICY|POLH_FLEX_25|POL_WORKFLOW_REMARKS|\n|PGITH_POLICY|POLH_FLEX_26|POL_WORKFLOW_ASSIGN|\n|PGITH_POLICY|POLH_FLEX_27|POL_WORKFLOW_CODE|\n|PGITH_POLICY|POLH_FLEX_28|POL_WORKFLOW_USER_ID|\n|PGITH_POLICY|POLH_FLEX_29|POL_WORKFLOW_DOC_SYSTEM|\n|PGITH_POLICY|POLH_FLEX_33|POL_DMS_UPDATE|\n|PGITH_POLICY|POLH_FLEX_35|POL_RELATIONSHIP_WITH_INSURED|\n|PGITH_POLICY|POLH_FLEX_36|POL_SMS_SENT_DT|\n|PGITH_POLICY|POLH_FLEX_37|POL_WORKFLOW_APPR_TIME|\n|PGITH_POLICY|POLH_FLEX_40|POL_BACK_DT_RECEIPT_DT|\n|PGITH_POLICY|POLH_FLEX_48|POL_BANK_CODE|\n|PGITH_POLICY|POLH_FLEX_49|POL_BANK_BRANCH_CODE|\n|PGITH_POLICY|POLH_FLEX_50|POL_INDUSTRY_TYPE|\n|PGITH_POLICY|POLH_FLEX_51|POL_INDUSTRY_TYPE_REMARKS|\n|PGITH_POLICY|POLH_FLEX_58|POL_SM_CODE|\n|PGITH_POLICY|POLH_FLEX_59|POL_SP_CODE|\n|PGITH_POLICY|POLH_FLEX_60|POL_CERTIFICATE_GEN_NO|\n|PGITH_POLICY|POLH_FLEX_68|POL_GROUP_SIZE|\n|PGITH_POLICY|POLH_FLEX_76|POL_BANK_EMPLOYEE|\n|PGITH_POLICY|POLH_FLEX_78|POL_BASE_INFO_REMARKS|\n|PGITH_POLICY|POLH_FLEX_80|POL_SMS_DT|\n|PGITH_POLICY|POLH_FLEX_DT_01|POL_PROPOSAL_RECEIVED_DT|\n|PGITH_POLICY|POLH_FLEX_NUM_04|POL_INTERMEDIARY_NUM|\n|PGITH_POLICY|POLH_FLEX_NUM_05|POL_FULFILER|\n|PGITH_POLICY|POLH_FLEX_YN_03|POL_I_KNOW_THE_CUSTOMER|\n|PGITH_POLICY|POLH_FLEX_YN_05|POL_FRESH|\n|PGITH_POLICY|POLH_FLEX_YN_06|POL_OWN_OFFICE_RENEWAL|\n|PGITH_POLICY|POLH_FLEX_YN_07|POL_OTHER_OFFICE_RENEWAL|\n|PGITH_POLICY|POLH_FLEX_YN_08|POL_PORTABILITY|",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T13:48:10.388+0530",
                            updated: "2024-09-13T13:48:10.388+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/comment",
                    maxResults: 10,
                    total: 10,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130868/worklog/43739",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63720823f6c85b343c066990",
                                accountId: "63720823f6c85b343c066990",
                                emailAddress: "v.yashchilwar@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/b37ea19fe0bc49fa1a9b4d6a38a6cc2a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FYC-2.png",
                                },
                                displayName: "Yash Chilwar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-13T13:48:21.250+0530",
                            updated: "2024-09-13T13:48:21.250+0530",
                            started: "2024-09-13T11:48:18.041+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43739",
                            issueId: "130868",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62f0a96b48e310e672970057",
                    accountId: "62f0a96b48e310e672970057",
                    emailAddress: "jitendrakumar.patel@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/b5d1e4fc3082429e3915c576dc943edf?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJ-0.png",
                    },
                    displayName: "jitendrakumar.patel",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T13:48:21.268+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10606",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "In Dev",
                    id: "10606",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130777",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130777",
            key: "STAR-60854",
            fields: {
                summary: "Code Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127280",
                    key: "STAR-57612",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127280",
                    fields: {
                        summary: "Change in Cumulative Bonus - Floater",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                            name: "High",
                            id: "2",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-03T11:56:45.148+0530",
                description: "Code Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                    accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                    emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                    },
                    displayName: "Abhishek Kalwaghe",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-04",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130777/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-03T12:06:09.910+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130559",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559",
            key: "STAR-60647",
            fields: {
                summary:
                    "Annual_income coming null in agg_policy_master_report_daily for given sample",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10003",
                    id: "10003",
                    description: "A small, distinct piece of work.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                    name: "Task",
                    subtask: false,
                    avatarId: 10318,
                    hierarchyLevel: 0,
                },
                created: "2024-09-02T16:25:58.327+0530",
                description:
                    "Please find the attached sample as Annual_income coming null in agg_policy_master_report_daily \nin base Annual_income is present for given samples\n\n|ANNUAL_INCOME|PROPOSER_CODE|PARTY_ID|\n|200000|PI0000323091|51187372216062022|\n|280000|PI0000333122|51573057021062022|\n\nCC: [~accountid:62f0a96b48e310e672970057]  [~accountid:62ce6092a94a6f9c0efea08f] ",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                    accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                    emailAddress: "vaishnavi.shelke@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                    },
                    displayName: "vaishnavi.shelke",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/1",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/highest.svg",
                    name: "Highest",
                    id: "1",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/204035",
                            id: "204035",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:62ce6092a94a6f9c0efea08f] [~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4] Do we have to take it up in same sprint.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-03T11:21:39.397+0530",
                            updated: "2024-09-03T11:21:39.397+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/204087",
                            id: "204087",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:63045b8e6acf9eeb443dbf0b] - This is an Ops task. I have corrected the module now.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=62ce6092a94a6f9c0efea08f",
                                accountId: "62ce6092a94a6f9c0efea08f",
                                emailAddress: "santoshkumar.s@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/7330cf0bec2805f97993135056a6961d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSK-4.png",
                                },
                                displayName: "Santosh Kumar",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-03T11:46:42.222+0530",
                            updated: "2024-09-03T11:46:42.222+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/204541",
                            id: "204541",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: 'hi [~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4]  to derive the column annual income we have used the udf getpartyprop function to this udf we pass the column ΓÇÿdetailsΓÇÖ which is nothing but the  list of columns like party_code, occupation, home_phone and then on the baisi of the priority we picked the values for these columns from the udf. Now as far as the column annual income is concerned the values are coming null because while creating list of columns to send to the udf the column annual income is not present and hence the we are getting null values for samples. ThatΓÇÖs why for all the records in agg_policy_master_bancs_daily we have null values for the column annual incomeΓÇªΓÇª \n\n!image-20240903-115433.png|width=1438,height=416,alt="image-20240903-115433.png"!\n\n!image-20240903-115444.png|width=794,height=458,alt="image-20240903-115444.png"!\n\n!image-20240903-115648.png|width=1937,height=353,alt="image-20240903-115648.png"!\n\ncc: [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] ',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-03T17:28:15.490+0530",
                            updated: "2024-09-03T17:28:15.490+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/204983",
                            id: "204983",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                                accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                                emailAddress: "vaishnavi.shelke@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "vaishnavi.shelke",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] Need to discuss this point \n\nCC: [~accountid:62f0a96b48e310e672970057]  [~accountid:63045b8e6acf9eeb443dbf0b]  [~accountid:62ce6092a94a6f9c0efea08f] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                                accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                                emailAddress: "vaishnavi.shelke@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "vaishnavi.shelke",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T12:52:23.852+0530",
                            updated: "2024-09-04T12:52:23.852+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/205070",
                            id: "205070",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4] ok let me know when can we connect ?",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T14:18:36.932+0530",
                            updated: "2024-09-04T14:18:36.932+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/205250",
                            id: "205250",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: ' [~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4] as discussed we have made the changes and data is written in {{uat.reporting_tables.agg_policy_master_bancs_daily_1}} now we are getting values for the column annal_income.. and we will be deploying these changes along with the [https://starhealthinsurance.atlassian.net/browse/STAR-56600|https://starhealthinsurance.atlassian.net/browse/STAR-56600|smart-link] ΓÇª \n\n!image-20240904-120459.png|width=1090,height=446,alt="image-20240904-120459.png"!\n\ncc: [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] ',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T17:36:11.049+0530",
                            updated: "2024-09-04T17:36:11.049+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/205265",
                            id: "205265",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                                accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                                emailAddress: "vaishnavi.shelke@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "vaishnavi.shelke",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "ok",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                                accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                                emailAddress: "vaishnavi.shelke@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "vaishnavi.shelke",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T17:53:29.893+0530",
                            updated: "2024-09-04T17:53:29.893+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/206322",
                            id: "206322",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: 'hi [~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4] the deployment is done for the policy_master now we are getting not null values for the column annual_income for the shared samples. we can clos this ticket now.. \n\n!image-20240906-133031.png|width=1025,height=676,alt="image-20240906-133031.png"!\n\ncc: [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] [~accountid:63045b8f56918451890432ca] ',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-06T19:00:41.262+0530",
                            updated: "2024-09-06T19:00:41.262+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/206501",
                            id: "206501",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4] Kindly close the ticket if it is ok.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T11:23:21.343+0530",
                            updated: "2024-09-09T11:23:21.343+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/206885",
                            id: "206885",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                                accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                                emailAddress: "vaishnavi.shelke@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "vaishnavi.shelke",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: " [~accountid:712020:58dcee0d-1435-450c-9126-a3650e20c9a5] annual_income available in source for given samples, but in agg_policy_master_report_daily coming as null\n\ncheck it once\n\n*BANCS samples:*\n\n||PTY_PARTY_ID||annual_income||PROPOSER_CODE||\n|2042122214120920231|350000|34218889|\n|1604445461250820221|200000|30854024|\n\n*PREMIA SAMPLES:*\n\n||PTY_PARTY_ID||annual_income||CUST_CODE||\n|2168827|400000|AA0001294156|\n|32767194|200000|AA0029173670|\n\nCC: [~accountid:62f0a96b48e310e672970057] [~accountid:62ce6092a94a6f9c0efea08f] [~accountid:63045b8e6acf9eeb443dbf0b] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                                accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                                emailAddress: "vaishnavi.shelke@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "vaishnavi.shelke",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T16:19:39.165+0530",
                            updated: "2024-09-09T16:20:25.252+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/207003",
                            id: "207003",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: '[~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4] for the premia source we have taken the column {{cust_flex_15}} from the table pcom_customer as annual_income. for given records the value of column {{cust_flex_15}} is null itself in the pcom_customer table. \n\n!image-20240909-122028.png|width=1423,height=404,alt="image-20240909-122028.png"!\n\n!image-20240909-122046.png|width=1028,height=260,alt="image-20240909-122046.png"!\n\nfor bancs: \n\nfor the records from the bancs the column annual_income is coming from {{T_RPDB_PARTY_PROPERTY}} table on the basis of the priorities. The policy_id for the given records are present in base table i.e t_rpdb_policy but not present in {{T_RPDB_PARTY_PROPERTY}} and {{T_RPDB_POL_PARTY}} so we are getting null values for the column annual_income \n\n!image-20240909-130736.png|width=1213,height=415,alt="image-20240909-130736.png"!\n\n!image-20240909-130800.png|width=1041,height=265,alt="image-20240909-130800.png"!\n\n!image-20240909-130816.png|width=1248,height=278,alt="image-20240909-130816.png"!\n\ncc: [~accountid:63045b8f8474ff0a80ac47bd] [~accountid:63045b8e6acf9eeb443dbf0b] ',
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T18:18:54.688+0530",
                            updated: "2024-09-09T18:38:37.165+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/207246",
                            id: "207246",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "{{ROW_NUMBER() OVER (PARTITION BY POLH_NO order by ┬áPOLH_END_NO_IDX desc) as rk from production.premia.pgith_policy}}",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T12:48:51.330+0530",
                            updated: "2024-09-10T12:48:51.330+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/207596",
                            id: "207596",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: ".",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T17:34:44.764+0530",
                            updated: "2024-09-10T17:34:44.764+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/208352",
                            id: "208352",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "[~accountid:712020:596b3847-7b25-4ac3-83bd-48056a495fd4] kindly close the ticket.",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T10:19:24.412+0530",
                            updated: "2024-09-12T10:19:24.412+0530",
                            jsdPublic: true,
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment/208962",
                            id: "208962",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "we need to join pcom_customer with the policy master using cust_code",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-12T18:26:55.363+0530",
                            updated: "2024-09-12T18:26:55.363+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/comment",
                    maxResults: 15,
                    total: 15,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 4,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/worklog/43340",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-03T17:28:25.713+0530",
                            updated: "2024-09-03T17:28:25.713+0530",
                            started: "2024-09-03T14:28:16.607+0530",
                            timeSpent: "3h",
                            timeSpentSeconds: 10800,
                            id: "43340",
                            issueId: "130559",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/worklog/43403",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T17:36:21.307+0530",
                            updated: "2024-09-04T17:36:21.307+0530",
                            started: "2024-09-04T16:36:12.331+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43403",
                            issueId: "130559",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/worklog/43482",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-06T19:00:52.518+0530",
                            updated: "2024-09-06T19:00:52.518+0530",
                            started: "2024-09-06T18:00:42.193+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43482",
                            issueId: "130559",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130559/worklog/43546",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                                accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                                emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                                },
                                displayName: "Abhishek Kalwaghe",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-09T18:19:01.031+0530",
                            updated: "2024-09-09T18:19:01.031+0530",
                            started: "2024-09-09T14:18:55.449+0530",
                            timeSpent: "4h",
                            timeSpentSeconds: 14400,
                            id: "43546",
                            issueId: "130559",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A596b3847-7b25-4ac3-83bd-48056a495fd4",
                    accountId: "712020:596b3847-7b25-4ac3-83bd-48056a495fd4",
                    emailAddress: "vaishnavi.shelke@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/043a07e0363e2acd6e4bc90b3b2e1897?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                    },
                    displayName: "vaishnavi.shelke",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-13T18:04:24.838+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10608",
                    description: "",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                    name: "In QA",
                    id: "10608",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130446",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130446",
            key: "STAR-60542",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127819",
                    key: "STAR-58107",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127819",
                    fields: {
                        summary: "Creation of New Aggregate AGG_POLICY_PROPOSAL_DOC",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/6",
                            description:
                                "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/closed.png",
                            name: "Closed",
                            id: "6",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                            name: "High",
                            id: "2",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-02T12:29:14.810+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-02",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130446/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130446/worklog/43313",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-03T11:25:36.333+0530",
                            updated: "2024-09-03T11:25:36.333+0530",
                            started: "2024-09-02T09:25:00.000+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43313",
                            issueId: "130446",
                        },
                    ],
                },
                updated: "2024-09-03T11:26:08.373+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130441",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130441",
            key: "STAR-60538",
            fields: {
                summary: "Solution Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127819",
                    key: "STAR-58107",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127819",
                    fields: {
                        summary: "Creation of New Aggregate AGG_POLICY_PROPOSAL_DOC",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/6",
                            description:
                                "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/closed.png",
                            name: "Closed",
                            id: "6",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                            name: "High",
                            id: "2",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-02T12:27:57.703+0530",
                description: "Solution Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-08-29",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130441/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130441/worklog/43472",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-06T14:07:41.008+0530",
                            updated: "2024-09-06T14:07:41.008+0530",
                            started: "2024-09-03T10:07:00.000+0530",
                            timeSpent: "4h",
                            timeSpentSeconds: 14400,
                            id: "43472",
                            issueId: "130441",
                        },
                    ],
                },
                updated: "2024-09-06T14:07:50.730+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "130440",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130440",
            key: "STAR-60537",
            fields: {
                summary: "Requirement_Gathering",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127819",
                    key: "STAR-58107",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127819",
                    fields: {
                        summary: "Creation of New Aggregate AGG_POLICY_PROPOSAL_DOC",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/6",
                            description:
                                "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/closed.png",
                            name: "Closed",
                            id: "6",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                            name: "High",
                            id: "2",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-09-02T12:27:34.122+0530",
                description: "Requirement_Gathering",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-08-28",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130440/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/130440/worklog/43268",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                                accountId: "63045b8e6acf9eeb443dbf0b",
                                emailAddress: "v.anamikasing@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                                },
                                displayName: "v.anamikasing",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-02T12:42:59.057+0530",
                            updated: "2024-09-02T12:42:59.057+0530",
                            started: "2024-08-28T10:42:00.000+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43268",
                            issueId: "130440",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-02T12:43:15.613+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "129488",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/129488",
            key: "STAR-59652",
            fields: {
                summary: "UAT",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "128269",
                    key: "STAR-58524",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128269",
                    fields: {
                        summary: "New Integration :- Ckyc data pushing to Moengae",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-30T11:31:27.195+0530",
                description: "UAT",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-08-30",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/129488/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 3,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/129488/worklog/43383",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T12:23:05.978+0530",
                            updated: "2024-09-04T12:23:05.978+0530",
                            started: "2024-09-04T10:23:00.451+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43383",
                            issueId: "129488",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/129488/worklog/43569",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-10T14:47:34.901+0530",
                            updated: "2024-09-10T14:47:34.901+0530",
                            started: "2024-09-10T13:47:31.825+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43569",
                            issueId: "129488",
                        },
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/129488/worklog/43653",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                                emailAddress: "v.anuragkale@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                                },
                                displayName: "v.anuragkale",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-11T19:52:19.927+0530",
                            updated: "2024-09-11T19:52:19.927+0530",
                            started: "2024-09-11T16:52:15.654+0530",
                            timeSpent: "3h",
                            timeSpentSeconds: 10800,
                            id: "43653",
                            issueId: "129488",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-11T19:52:19.942+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "128727",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128727",
            key: "STAR-58921",
            fields: {
                summary: "Code Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "125705",
                    key: "STAR-56600",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/125705",
                    fields: {
                        summary: "Logic changes and column addition in policy_master",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/6",
                            description:
                                "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/closed.png",
                            name: "Closed",
                            id: "6",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-28T15:56:42.984+0530",
                description: "Code Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A58dcee0d-1435-450c-9126-a3650e20c9a5",
                    accountId: "712020:58dcee0d-1435-450c-9126-a3650e20c9a5",
                    emailAddress: "v.abhishekkalwaghe@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/a63ff4206df950c4f00571cde1278456?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-4.png",
                    },
                    displayName: "Abhishek Kalwaghe",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-13",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128727/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                updated: "2024-09-04T15:48:57.254+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "128626",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128626",
            key: "STAR-58834",
            fields: {
                summary: "Failure Alerts Creation",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "128001",
                    key: "STAR-58272",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128001",
                    fields: {
                        summary: "SFTP Moengage Integration for Agent Details",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10614",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "In UAT",
                            id: "10614",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-28T10:05:17.722+0530",
                description: "Failure Alerts Creation",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128626/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-08-30T17:33:15.726+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10003",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "To Do",
                    id: "10003",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/2",
                        id: 2,
                        key: "new",
                        colorName: "blue-gray",
                        name: "To Do",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "128621",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128621",
            key: "STAR-58829",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "128001",
                    key: "STAR-58272",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128001",
                    fields: {
                        summary: "SFTP Moengage Integration for Agent Details",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10614",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "In UAT",
                            id: "10614",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-28T10:02:02.580+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128621/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128621/worklog/43195",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-08-29T17:43:20.065+0530",
                            updated: "2024-08-29T17:43:20.065+0530",
                            started: "2024-08-29T15:43:14.733+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43195",
                            issueId: "128621",
                        },
                    ],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                    accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                    emailAddress: "v.shahidkhan@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                    },
                    displayName: "v.shahidkhan",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-08-29T17:43:20.079+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "128616",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128616",
            key: "STAR-58824",
            fields: {
                summary: "Solution Document",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "128001",
                    key: "STAR-58272",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128001",
                    fields: {
                        summary: "SFTP Moengage Integration for Agent Details",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10614",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "In UAT",
                            id: "10614",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-28T09:52:20.078+0530",
                description: "Solution Document",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128616/comment",
                    maxResults: 0,
                    total: 0,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128616/worklog/43157",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            comment: "Solution Document",
                            created: "2024-08-29T07:38:40.209+0530",
                            updated: "2024-08-29T07:38:40.209+0530",
                            started: "2024-08-28T05:39:00.000+0530",
                            timeSpent: "2h",
                            timeSpentSeconds: 7200,
                            id: "43157",
                            issueId: "128616",
                        },
                    ],
                },
                updated: "2024-08-29T08:38:21.334+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "128615",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128615",
            key: "STAR-58823",
            fields: {
                summary: "Requirement Gathering",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "128001",
                    key: "STAR-58272",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128001",
                    fields: {
                        summary: "SFTP Moengage Integration for Agent Details",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10614",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "In UAT",
                            id: "10614",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-28T09:51:47.785+0530",
                description: "Requirement Gathering",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128615/comment/202098",
                            id: "202098",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "2 parts\n\n# Report Generation\n# SFTP MOvement",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-08-28T22:17:09.123+0530",
                            updated: "2024-08-28T22:17:09.123+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128615/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128615/worklog/43156",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            comment: "Requirement Gathering",
                            created: "2024-08-28T22:16:48.560+0530",
                            updated: "2024-08-28T22:16:48.560+0530",
                            started: "2024-08-28T21:17:01.027+0530",
                            timeSpent: "1h",
                            timeSpentSeconds: 3600,
                            id: "43156",
                            issueId: "128615",
                        },
                    ],
                },
                updated: "2024-08-28T22:17:09.123+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "128600",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128600",
            key: "STAR-58808",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "127820",
                    key: "STAR-58108",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/127820",
                    fields: {
                        summary:
                            "Logic change and column addition in agg_cps_policy_info_daily",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10531",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Code Review",
                            id: "10531",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                                id: 4,
                                key: "indeterminate",
                                colorName: "yellow",
                                name: "In Progress",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/2",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/high.svg",
                            name: "High",
                            id: "2",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-28T07:42:46.857+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                    accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                    emailAddress: "v.shahidkhan@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                    },
                    displayName: "v.shahidkhan",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-04",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128600/comment/204723",
                            id: "204723",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Development complete , Kindly review[https://starhealthinsurance.atlassian.net/browse/STAR-61001?focusedCommentId=204721|https://starhealthinsurance.atlassian.net/browse/STAR-61001?focusedCommentId=204721|smart-link] ",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3A2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                accountId: "712020:2fc20be6-f0ae-4bff-ba10-a42fc0c3eb59",
                                emailAddress: "v.shahidkhan@starinsurance.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/d25ea1a84228fc01a432b7deca40e85a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-0.png",
                                },
                                displayName: "v.shahidkhan",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-09-04T10:05:08.082+0530",
                            updated: "2024-09-04T10:05:08.082+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128600/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 0,
                    worklogs: [],
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8e6acf9eeb443dbf0b",
                    accountId: "63045b8e6acf9eeb443dbf0b",
                    emailAddress: "v.anamikasing@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/881d97142eda8949bfd149859ae1fbca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-1.png",
                    },
                    displayName: "v.anamikasing",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                updated: "2024-09-04T10:05:26.081+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/3",
                    description:
                        "This issue is being actively worked on at the moment by the assignee.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/statuses/inprogress.png",
                    name: "In Progress",
                    id: "3",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/4",
                        id: 4,
                        key: "indeterminate",
                        colorName: "yellow",
                        name: "In Progress",
                    },
                },
            },
        },
        {
            expand:
                "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            id: "128502",
            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128502",
            key: "STAR-58720",
            fields: {
                summary: "Review",
                issuetype: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10223",
                    id: "10223",
                    description: "A small piece of work that's part of a larger task.",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    name: "Sub-task",
                    subtask: true,
                    avatarId: 10316,
                    hierarchyLevel: -1,
                },
                parent: {
                    id: "128269",
                    key: "STAR-58524",
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128269",
                    fields: {
                        summary: "New Integration :- Ckyc data pushing to Moengae",
                        status: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10615",
                            description: "",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/statuses/generic.png",
                            name: "Ready to Release",
                            id: "10615",
                            statusCategory: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                                id: 3,
                                key: "done",
                                colorName: "green",
                                name: "Done",
                            },
                        },
                        priority: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                            name: "Medium",
                            id: "3",
                        },
                        issuetype: {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issuetype/10002",
                            id: "10002",
                            description:
                                "Functionality or a feature expressed as a user goal.",
                            iconUrl:
                                "https://starhealthinsurance.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                            name: "Story",
                            subtask: false,
                            avatarId: 10315,
                            hierarchyLevel: 0,
                        },
                    },
                },
                created: "2024-08-27T16:21:43.822+0530",
                description: "Review",
                reporter: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=712020%3Aed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    accountId: "712020:ed8aeb37-4c3a-4a4a-8ed1-30119fd584e6",
                    emailAddress: "v.anuragkale@starinsurance.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/58f0f1be8b303ce693e25ebeca52bb3b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FV-2.png",
                    },
                    displayName: "v.anuragkale",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                priority: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/priority/3",
                    iconUrl:
                        "https://starhealthinsurance.atlassian.net/images/icons/priorities/medium.svg",
                    name: "Medium",
                    id: "3",
                },
                labels: [],
                duedate: "2024-09-06",
                comment: {
                    comments: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128502/comment/202608",
                            id: "202608",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            body: "Reviewed -\n\n# Code \n# SFTP PIEPLINE",
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            created: "2024-08-29T18:19:51.475+0530",
                            updated: "2024-08-29T18:19:51.475+0530",
                            jsdPublic: true,
                        },
                    ],
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128502/comment",
                    maxResults: 1,
                    total: 1,
                    startAt: 0,
                },
                assignee: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                    accountId: "63045b8f56918451890432ca",
                    emailAddress: "v.pratikshamete@starhealth.in",
                    avatarUrls: {
                        "48x48":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "24x24":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "16x16":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                        "32x32":
                            "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                    },
                    displayName: "Pratiksha Mete",
                    active: true,
                    timeZone: "Asia/Kolkata",
                    accountType: "atlassian",
                },
                worklog: {
                    startAt: 0,
                    maxResults: 20,
                    total: 1,
                    worklogs: [
                        {
                            self: "https://starhealthinsurance.atlassian.net/rest/api/2/issue/128502/worklog/43202",
                            author: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            updateAuthor: {
                                self: "https://starhealthinsurance.atlassian.net/rest/api/2/user?accountId=63045b8f56918451890432ca",
                                accountId: "63045b8f56918451890432ca",
                                emailAddress: "v.pratikshamete@starhealth.in",
                                avatarUrls: {
                                    "48x48":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "24x24":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "16x16":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                    "32x32":
                                        "https://secure.gravatar.com/avatar/6bec5317f5e33a0974af4a0f30fa3a7a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPM-5.png",
                                },
                                displayName: "Pratiksha Mete",
                                active: true,
                                timeZone: "Asia/Kolkata",
                                accountType: "atlassian",
                            },
                            comment: "Reviewed",
                            created: "2024-08-29T18:18:36.946+0530",
                            updated: "2024-08-29T18:18:36.946+0530",
                            started: "2024-08-29T15:19:02.024+0530",
                            timeSpent: "3h",
                            timeSpentSeconds: 10800,
                            id: "43202",
                            issueId: "128502",
                        },
                    ],
                },
                updated: "2024-08-29T18:20:04.943+0530",
                status: {
                    self: "https://starhealthinsurance.atlassian.net/rest/api/2/status/10002",
                    description: "",
                    iconUrl: "https://starhealthinsurance.atlassian.net/",
                    name: "Done",
                    id: "10002",
                    statusCategory: {
                        self: "https://starhealthinsurance.atlassian.net/rest/api/2/statuscategory/3",
                        id: 3,
                        key: "done",
                        colorName: "green",
                        name: "Done",
                    },
                },
            },
        },
    ],
};

