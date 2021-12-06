export const uiConfig = firebase => {
    return {
        signInFlow: 'popup',
        signInSuccessful: '/',
        tosUr: "/terms-of-service",
        privacyPolicyUrl: "/privacy-policy",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    }
}