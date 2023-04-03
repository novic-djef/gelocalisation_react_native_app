import isEqual from 'lodash/isEqual';
import Toast from 'react-native-root-toast';
import {Color} from '../config/Color';

let slugify = require('slugify');
let route = require('./../route.json');

export const thousandsSeparators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return num_parts.join(".");
}

export const cutString = (word, max) => {

    return word === null ? '          ' : `${word.slice(0, max)}...`;
}
export const cutStringWithoutDot = (word, max) => {

    return word === null ? '          ' : `${word.slice(0, max)}`;
}

export const scaleWithPixel = (size: any, limitScale = 1.2) => {
    /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
    const value = scaleValue > limitScale ? limitScale : scaleValue;
    return size * value;
};

export const isNormalInteger = (str) => {
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str))
        return false;
    else
        return true;
}

export const uppercaseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getErrorMsg = (error: any) =>
    error.error?.hasOwnProperty('message')
        ? Array.isArray(error.error?.message)
            ? error.error?.join('\n')
            : error.error?.error
        : error.error?.error;

export const displayToast = (message) => {
    Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        backgroundColor: Color.primaryColor,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        }
    });
}

export const isIlinkWorldWallet = (walletName) => {
    return isEqual(walletName, 'ilink');
}


export const isEmptyObject = (obj) => {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

export const identityPieces = () => {
    return [
        {
            name: 'IDENTITY_CARD'
        },
        {
            name: 'PASSEPORT'
        },
        {
            name: 'OTHER_IDENTITY_PIECE'
        },
    ]
}

export const withdrawalMode = () => {
    return [
        {
            name: 'WITHDRAWAL_IN_CASH'
        },
        {
            name: 'TRANSFER_IN_ACCOUNT'
        }
    ]
}

export const typeCaution = () => {
    return [
        {
            name: 'GROUP'
        },
        {
            name: 'INDIVIDUAL'
        }
    ]
}

export const typeEpargne = () => {
    return [
        {
            name: 'SIMPLE'
        },
        {
            name: 'BLOCKED'
        }
    ]
}

export const typeIdIDestinataire = () => {
    return [
        {
            name: 'PHONE'
        },
        {
            name: 'CODE_WALLET'
        }
    ]
}

export const paysDestinationData = () => {
    return [
        {
            name: 'Cameroun'
        },
        {
            name: 'Gabon'
        },
        {
            name: 'Congo'
        },
        {
            name: 'Sénégal'
        },
        {
            name: 'Côte d\'Ivoire'
        },
    ]
}

export const walletActifData = () => {
    return [
        {
            name: 'UBA'
        },
        {
            name: 'SOGO'
        },
        {
            name: 'Small World'
        },
        {
            name: 'UBA fs iLink'
        },
        {
            name: 'iLink World'
        },
    ]
}

export const inputCardSource = () => [
    {
        name: 'NUMERO_DE_SERIE',
        value: 'serial-number'
    },
    {
        name: 'CREDIT_CARD',
        value: 'credit-card'
    },
]

export const transactionHistoryLabel = () => {
    return [
        /*           {
                       icon: 'arrow-expand',
                       label: 'Type'
                  }, */
        {
            icon: 'inbox-arrow-up',
            label: 'Source'
        },
        {
            icon: 'cash',
            label: 'AMOUNT_LABEL'
        },
        {
            icon: 'account-arrow-right',
            label: 'DESTINATAIRE'
        },
        {
            icon: 'calendar-clock',
            label: 'Date'
        },
    ]
}
export const transactionHistoryIlinkLabel = () => {
    return [
        /*{
             icon: 'arrow-expand',
             label: 'Type'
        },
        {
             icon: 'inbox-arrow-up',
             label: 'Source'
        }, */
        {
            icon: 'cash',
            label: 'AMOUNT_LABEL'
        },
        {
            icon: 'account-arrow-right',
            label: 'DESTINATAIRE'
        },
        {
            icon: 'calendar-clock',
            label: 'DATE'
        },
    ]
}
export const nanoCreditHistoryLabel = () => {
    return [
        /*        {
                    icon: 'arrow-expand',
                    label: 'HISTORY_TYPE'
                },*/
        {
            icon: 'inbox-arrow-up',
            label: 'ETAT'
        },
        {
            icon: 'cash',
            label: 'AMOUNT_LABEL'
        },
        {
            icon: 'calendar-clock',
            label: 'DATE'
        },
    ]
}
export const nanoSanteHistoryLabel = () => {
    return [
        {
            icon: 'inbox-arrow-up',
            label: 'ID'
        },
        {
            icon: 'cash',
            label: 'AMOUNT_LABEL'
        },
        {
            icon: 'account',
            label: 'INSTITUTE_NAME'
        },
    ]
}
export const transactionHistoryNanoCreditLabel = () => {
    return [
        /*{
             icon: 'arrow-expand',
             label: 'Type'
        },
        {
             icon: 'inbox-arrow-up',
             label: 'Source'
        }, */
        {
            icon: 'cash',
            label: 'Type'
        },
        {
            icon: 'cash',
            label: 'AMOUNT_LABEL'
        },
        {
            icon: 'calendar-clock',
            label: 'Date'
        },
    ]
}

export const transactionHistoryUser = () => {
    return [
        {
            type: 'depot',
            source: 'wallet',
            montant: 10000,
            destinataire: 'John Doe',
            date: '2020-05-15',
        },
        {
            type: 'retrait',
            source: 'wallet',
            montant: 10000,
            destinataire: 'John Doe',
            date: '2020-05-15',
        },
    ];
}

export const displayTransactionType = (transactionType) => {
    return isEqual(transactionType, 'E') ? 'SAVING' : 'NANO_CREDIT';
}

export const optionWalletToBank = {
    title: 'DEPOSIT_TO_BANK',
    subTitle: 'CHOOSE_OPERATOR',
    options: []
}

export const optionDepotScreen = {
    type: 'DEPOT',
    title: 'ENVOIE_ARGENT',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.envoieCashVersWalletAgent,
            icon: 'wallet',
            title: 'DEPOSIT_CASH_TO_WALLET',
        },
        {
            screen: route.envoieCashVersAutreWalletAgent,
            icon: 'cash-refund',
            title: 'DEPOSIT_CASH_TO_OTHER_WALLET',
        },
        {
            screen: route.envoieCashVersCarteAgent,
            icon: 'credit-card',
            title: 'DEPOSIT_CASH_TO_VISA',
        },
        {
            screen: route.envoiCashVersCashAgent,
            icon: 'cash-multiple',
            title: 'DEPOSIT_CASH_TO_CASH',
        },
        {
            screen: route.operateurOptionSelect,
            icon: 'bank-transfer-in',
            title: 'DEPOSIT_CASH_TO_BANK',
            subScreenOption: optionWalletToBank,
            type: 'WALLET_TO_BANK',
        },
    ]
}

export const optionRetraitScreen = {
    type: 'RETRAIT',
    title: 'RETRAIT_ARGENT',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.retraitEnCashAgent,
            icon: 'cash',
            title: 'WITHDRAWAL_IN_CASH',
        },
        {
            screen: route.retraitCarteVersCashAgent,
            icon: 'credit-card',
            title: 'WITHDRAWAL_CARD_TO_CASH_AGENT',
        },
    ]
}

export const optionRetraitUserScreen = {
    type: 'RETRAIT_USER',
    title: 'RETRAIT_ARGENT',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.retraitWalletVersCashUser,
            icon: 'wallet',
            title: 'WITHDRAWAL_WALLET_TO_CASH',
        },
        {
            screen: route.retraitCarteVersCashUser,
            icon: 'credit-card-refund',
            title: 'WITHDRAWAL_CARD_TO_CASH',
        },
        {
            screen: route.retraitCarteVersWalletUser,
            icon: 'credit-card',
            title: 'WITHDRAWAL_CARD_TO_WALLET',
        }, {
            screen: '',
            icon: 'credit-card',
            title: 'WITHDRAWAL_BANK_TO_WALLET',
        }
    ]
}

export const optionDepotUserScreen = {
    type: 'DEPOT_USER',
    title: 'ENVOIE_ARGENT',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.envoieWalletToWalletUser,
            icon: 'wallet',
            title: 'DEPOSIT_WALLET_TO_WALLET',
        },
        {
            screen: route.envoieWalletToCashUser,
            icon: 'cash-refund',
            title: 'DEPOSIT_TO_CASH',
        },
        {
            screen: route.envoieWalletToCardUser,
            icon: 'credit-card',
            title: 'DEPOSIT_TO_CARD',
        },
        {
            type: 'WALLET_TO_BANK',
            screen: route.operateurOptionSelect,
            icon: 'bank-transfer-in',
            title: 'DEPOSIT_TO_BANK',
            subScreenOption: optionWalletToBank
        },
    ]
};

export const optionIdentificationScreen = {
    type: 'IDENTIFICATION',
    title: 'IDENTIFICATION',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.createIdentification,
            icon: 'pencil-plus',
            title: 'CREATION_IDENTIFICATION_DESCRIPTION_SUBSCREEN',
        },
        {
            screen: route.validateIdentification,
            icon: 'check-circle',
            title: 'VALIDATE_IDENTIFICATION_DESCRIPTION',
        },
    ]
};

export const optionIdentificationUserScreen = {
    type: 'IDENTIFICATION',
    title: 'IDENTIFICATION',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.createIdentificationUser,
            icon: 'pencil-plus',
            title: 'CREATE_MY_IDENTIFICATION',
        },
        {
            screen: route.modifyIdentificationUser,
            icon: 'pencil',
            title: 'MODIFY_IDENTIFICATION',
        },
    ]
};

export const optionLinkAccountUserScreen = {
    type: 'LINK_CARD',
    title: 'LINK_CARD_REATTACH',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.linkCard,
            icon: 'link',
            title: 'LINK_CARD',
        },
        {
            screen: route.reattachAccountUser,
            icon: 'card',
            title: 'REATTACH_CARD',
        },
    ]
};

export const optionNanoSanteUserScreen = {
    type: 'NANO_SANTE',
    title: 'NANO_SANTE',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            title: 'MANAGE_ASSURANCE',
            options: [
                {
                    title: 'SUBSCRIBE_ASSURANCE',
                    screen: 'insuranceSubscriptionScreen',
                    icon: 'file-medical',
                    iconType: "FontAwesome5"
                },
                {
                    title: 'ADD_SUBSCRIBE',
                    screen: 'addBeneficiaryScreen',
                    icon: "user-plus",
                    iconType: "FontAwesome5"
                },
                {
                    title: 'ACTIVATE_INSSURANCE',
                    screen: 'activateBuySubscriptionScreen',
                    icon: "check-circle",
                    iconType: "FontAwesome5"

                },
                {
                    title: 'RENEW_INSSURANCE',
                    screen: 'renewAssuranceScreen',
                    icon: "sync",
                    iconType: "FontAwesome5"

                },
                {
                    screen: 'deleteBeneficiaryScreen',
                    icon: 'user-minus',
                    title: 'DELETE_SUBSCRIBE',
                    iconType: "FontAwesome5"

                },
                {
                    screen: 'stopSubscriptionScreen',
                    icon: 'hand-spock',
                    title: 'STOP_SUBSCRIBE',
                    iconType: "FontAwesome5"

                },
            ]
        },
        {
            title: 'MANAGE_HEALTH',
            options: [
                {
                    title: 'HISTORIC_HEALTH',
                    screen: 'historiqueNanoSanteUserScreen',
                    icon: 'history',
                    iconType: "FontAwesome5"

                },
                {
                    title: 'VALID_HEALTH',
                    screen: 'validateConsultationScreen',
                    icon: 'check-circle',
                    iconType: "FontAwesome5"
                },
            ]
        },

    ]
}

export const optionNanoCreditScreen = {
    type: 'NANO_CREDIT',
    title: 'NANO_CREDIT',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            icon: 'account-multiple',
            title: 'MANAGE_GROUP',
            screen: route.groupNanoCredit
        },
        /*           {
                       screen: "",
                       icon: 'account-multiple-plus',
                       title: 'JOIN_GROUP',
                  },
        {
             screen: "",
             icon: 'account-card-details',
             title: 'OPEN_ACCOUNT',
        },
        */
        /*           {
                       screen: route.askNanoCredit,
                       icon: 'cash',
                       title: 'MANAGE_CREDIT',
                  }, */
        {
            title: 'DEMAND_NANO_CREDIT',
            screen: route.askNanoCredit,
            icon: 'cash'
        },
        {
            title: 'REFUND_NANO_CREDIT',
            screen: route.refundNanoCreditUser,
            icon: "cash-refund"
        },
        /*           {
                       screen: "",
                       icon: 'briefcase-edit',
                       title: 'MANAGE_SAVINGS',
                  }, */
        {
            screen: route.epargnerArgentUser,
            icon: 'cash-register',
            title: 'SAVE_MONEY',
        },
        {
            screen: route.casserEpargneUser,
            icon: 'cash-multiple',
            title: 'BREAK_EPARGNE',
        },

    ]
}

export const optionNanoCreditAgentScreen = {
    type: 'NANO_CREDIT',
    title: 'NANO_CREDIT',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.cautionNanoCreditAgent,
            icon: 'cash',
            title: 'CAUTION_CREDIT',
        },
    ]
}

export const optionNanoSanteAgentScreen = {
    type: 'NANO_SANTE',
    title: 'NANO_SANTE',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            screen: route.saisirFeuilleSoinScreen,
            icon: 'file-medical',
            title: 'SAISIR_FEUILLE_SOIN',
            iconType: "FontAwesome5"
        },
        {
            screen: route.executerPrescriptionScreen,
            icon: 'check-circle',
            title: 'EXECUTER_PRESCRIPTION',
            iconType: "FontAwesome5"
        },
        {
            screen: route.modifierFeuilleSoinScreen,
            icon: 'edit',
            title: 'MODIFY_CONSULTATION',
            iconType: "FontAwesome5"
        },
        {
            screen: route.modifierExecutionPrescriptionScreen,
            icon: 'edit',
            title: 'MODIFY_EXECUTION',
            iconType: "FontAwesome5"
        },
        {
            icon: 'book-medical',
            title: 'DEMAND_AUTORIZATION_HEALTH',
            screen: 'demandeAutorisationSoinScreen',
            iconType: "FontAwesome5"
        },
        {
            screen: route.historiqueNanoSanteAgentScreen,
            icon: 'history',
            title: 'HISTORY',
            iconType: "FontAwesome5"
        }

    ]
}


export const optionPaiementEau = {
    title: 'PAIEMENT_FACTURE',
    subTitle: 'CHOOSE_OPERATOR',
    operatorType: 'water',
    options: [
        {
            type: 'PAIEMENT_EAU',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 1',
        },
        {
            type: 'PAIEMENT_EAU',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 2',
        },
        {
            type: 'PAIEMENT_EAU',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 3',
        },
        {
            type: 'PAIEMENT_EAU',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 4',
        },
        {
            type: 'PAIEMENT_EAU',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 5',
        },
        {
            type: 'PAIEMENT_EAU',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 6',
        },
    ]
}

export const optionPaiementElectricite = {
    title: 'PAIEMENT_FACTURE',
    subTitle: 'CHOOSE_OPERATOR',
    operatorType: 'electricity',
    options: [
        {
            type: 'PAIEMENT_EAU_ELECTRICITE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 1',
        },
        {
            type: 'PAIEMENT_EAU_ELECTRICITE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 2',
        },
        {
            type: 'PAIEMENT_EAU_ELECTRICITE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 3',
        },
        {
            type: 'PAIEMENT_EAU_ELECTRICITE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 4',
        },
        {
            type: 'PAIEMENT_EAU_ELECTRICITE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 5',
        },
        {
            type: 'PAIEMENT_EAU_ELECTRICITE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur eau-électricité 6',
        },
    ]
}

export const optionPaiementCreditTelephonique = {
    title: 'PAIEMENT_FACTURE',
    subTitle: 'CHOOSE_OPERATOR',
    operatorType: 'phone',
    options: [
        {
            type: 'PAIEMENT_CREDIT_TELEPHONE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur téléphonique 1',
        },
        {
            type: 'PAIEMENT_CREDIT_TELEPHONE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur téléphonique 2',
        },
        {
            type: 'PAIEMENT_CREDIT_TELEPHONE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur téléphonique 3',
        },
        {
            type: 'PAIEMENT_CREDIT_TELEPHONE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur téléphonique 4',
        },
        {
            type: 'PAIEMENT_CREDIT_TELEPHONE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur téléphonique 5',
        },
        {
            type: 'PAIEMENT_CREDIT_TELEPHONE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur téléphonique 6',
        },
    ]
}

export const optionPaiementAbonnementTV = {
    title: 'PAIEMENT_FACTURE',
    subTitle: 'CHOOSE_OPERATOR',
    operatorType: 'tv',
    options: [
        {
            type: 'PAIEMENT_ABONNEMENT_TV',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur abonnement TV 1',
        },
        {
            type: 'PAIEMENT_ABONNEMENT_TV',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur abonnement TV 2',
        },
        {
            type: 'PAIEMENT_ABONNEMENT_TV',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur abonnement TV 3',
        },
        {
            type: 'PAIEMENT_ABONNEMENT_TV',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur abonnement TV 4',
        },
        {
            type: 'PAIEMENT_ABONNEMENT_TV',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur abonnement TV 5',
        },
        {
            type: 'PAIEMENT_ABONNEMENT_TV',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur abonnement TV 6',
        },
    ]
}

export const optionPaiementEcole = {
    title: 'PAIEMENT_FACTURE',
    subTitle: 'CHOOSE_OPERATOR',
    operatorType: 'school',
    options: [
        {
            type: 'PAIEMENT_ECOLE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur école 1',
        },
        {
            type: 'PAIEMENT_ECOLE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur école 2',
        },
        {
            type: 'PAIEMENT_ECOLE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur école 3',
        },
        {
            type: 'PAIEMENT_ECOLE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur école 4',
        },
        {
            type: 'PAIEMENT_ECOLE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur école 5',
        },
        {
            type: 'PAIEMENT_ECOLE',
            screen: route.paiementFacture,
            icon: 'http://test.ilink-app.com:8080/mobilebackend/datas/img/network/ilink-world-logo.png',
            title: 'Opérateur école 6',
        },
    ]
}

export const optionPaiementFacture = {
    type: 'FACTURE',
    title: 'PAIEMENT_FACTURE',
    subTitle: 'CHOOSE_OPTION',
    options: [
        {
            type: 'FACTURE_WATER_ELECTRICITY',
            icon: 'water',
            title: 'PAIEMENT_EAU',
            screen: route.operateurOptionSelect,
            subScreenOption: optionPaiementEau
        },
        {
            type: 'FACTURE_ELECTRICITY',
            icon: 'water',
            title: 'PAIEMENT_ELECTRICITY',
            screen: route.operateurOptionSelect,
            subScreenOption: optionPaiementElectricite
        },
        {
            type: 'FACTURE_SCHOOL',
            icon: 'school',
            title: 'PAIEMENT_ECOLE',
            screen: route.operateurOptionSelect,
            subScreenOption: optionPaiementEcole
        },
        {
            type: 'FACTURE_PHONE',
            icon: 'phone-classic',
            title: 'PAIEMENT_CREDIT_TELEPHONIQUE',
            screen: route.operateurOptionSelect,
            subScreenOption: optionPaiementCreditTelephonique
        },
        {
            type: 'FACTURE_TV',
            icon: 'television-classic',
            title: 'PAIEMENT_ABONNEMENT_TV',
            screen: route.operateurOptionSelect,
            subScreenOption: optionPaiementAbonnementTV
        },
    ]
}
