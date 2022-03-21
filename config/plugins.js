module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'strapi-provider-upload-google-cloud-storage',
            providerOptions: {
                bucketName: env('GCP_BUCKET_NAME'),
                publicFiles: false,
                uniform: false,
                basePath: '',
            },
        },
    },
})