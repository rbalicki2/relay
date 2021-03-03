/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const {fbContent} = require('internaldocs-fb-helpers');

const Guides = fbContent({
  internal: [
    'guides/graphql-server-specification',
    'guides/client-schema-extensions',
    'guides/fb/writing-subscriptions',
    'guides/testing-relay-components',
    'guides/testing-relay-with-preloaded-components',
    'guides/fb/required-directive',
    {
      'Web-Only': [
        'guides/fb/incremental-data-delivery',
        'guides/fb/data-driven-dependencies',
        'guides/fb/image-prefetching',
        'guides/fb/comet-route-prefetching',
        'guides/fb/web-query-preloading',
        'guides/fb/render-from-hack',
        'guides/fb/production-graphql-endpoint-in-sandboxes',
        'guides/fb/react-flight',
        'guides/fb/native-fetch',
      ],
      'React-Native-Only': ['guides/fb/native-fetch'],
    },
  ],
  external: [
    'guides/graphql-server-specification',
    'guides/persisted-queries',
    'guides/network-layer',
    'guides/client-schema-extensions',
    'guides/testing-relay-components',
    'guides/testing-relay-with-preloaded-components',
    // TODO(T84714692) release required guide externally
    // 'guides/required-directive',
    // TODO(T84797602) release incremental data delivery externally
    // 'guides/incremental-data-delivery',
    // TODO release these in OSS
    // 'guides/data-driven-dependencies',
    // 'guides/image-prefetching',
  ],
});

// N.B. these IDs are path relative to the docs root + id.
// They do not always correspond to the slug, e.g. with /fb/ in the id.
module.exports = {
  docs: [
    {
      Introduction: [
        'introduction/introduction',
        'introduction/prerequisites',
        'introduction/installation-and-setup',
        'introduction/step-by-step-guide',
      ],
      'A Guided Tour': [
        'guided-tour/introduction',
        {
          'Setup and Workflow': [
            ...fbContent({
              internal: ['guided-tour/setup/fb/build-script'],
              external: ['guided-tour/setup/compiler'],
            }),
          ],
          'Rendering Data Basics': [
            'guided-tour/rendering/fragments',
            'guided-tour/rendering/queries',
            'guided-tour/rendering/variables',
            'guided-tour/rendering/loading-states',
            'guided-tour/rendering/error-states',
            'guided-tour/rendering/environment',
          ],
          'Reusing Cached Data for Rendering': [
            'guided-tour/reusing-cached-data/introduction',
            'guided-tour/reusing-cached-data/fetch-policies',
            'guided-tour/reusing-cached-data/availability-of-data',
            'guided-tour/reusing-cached-data/presence-of-data',
            'guided-tour/reusing-cached-data/staleness-of-data',
            'guided-tour/reusing-cached-data/rendering-partially-cached-data',
            'guided-tour/reusing-cached-data/filling-in-missing-data',
          ],
          'Rendering List Data and Pagination': [
            'guided-tour/list-data/connections',
            'guided-tour/list-data/rendering-connections',
            'guided-tour/list-data/pagination',
            'guided-tour/list-data/streaming-pagination',
            ...fbContent({
              internal: ['guided-tour/list-data/fb/blocking-pagination'],
              external: [],
            }),
            'guided-tour/list-data/refetching-connections',
            'guided-tour/list-data/adding-and-removing-items',
            'guided-tour/list-data/advanced-pagination',
          ],
        },
        fbContent({
          internal: {
            'Advanced Data Fetching': [
              'guided-tour/advanced-data-fetching/fb/preloading-data',
              {
                EntryPoints: [
                  'guided-tour/advanced-data-fetching/fb/entrypoints/entrypoints',
                  'guided-tour/advanced-data-fetching/fb/entrypoints/using-entrypoints',
                  'guided-tour/advanced-data-fetching/fb/entrypoints/using-entrypoints-at-facebook',
                  'guided-tour/advanced-data-fetching/fb/entrypoints/migrating-from-lazy-fetching',
                  'guided-tour/advanced-data-fetching/fb/entrypoints/entrypoints-faq',
                ],
              },
              'guided-tour/advanced-data-fetching/fb/data-driven-dependencies',
              'guided-tour/advanced-data-fetching/fb/image-prefetching',
            ],
          },
          external: {
            // TODO(T85915654): Release entrypoints guide externally
          },
        }),
        {
          'Updating Data': [
            'guided-tour/updating-data/introduction',
            'guided-tour/updating-data/graphql-mutations',
            'guided-tour/updating-data/graphql-subscriptions',
            'guided-tour/updating-data/local-data-updates',
            'guided-tour/updating-data/client-only-data',
          ],
          'Accessing Data Without React': [
            'guided-tour/accessing-data-without-react/fetching-queries',
            // 'guided-tour/accessing-data-without-react/prefetching-queries',
            // 'guided-tour/accessing-data-without-react/subscribing-to-queries',
            // 'guided-tour/accessing-data-without-react/reading-queries',
            // 'guided-tour/accessing-data-without-react/reading-fragments',
            'guided-tour/accessing-data-without-react/retaining-queries',
          ],
        },
      ],
      'API Reference': [
        {
          'Relay Hooks': [
            'api-reference/hooks/relay-environment-provider',
            'api-reference/hooks/use-relay-environment',
            'api-reference/hooks/use-preloaded-query',
            'api-reference/hooks/use-query-loader',
            'api-reference/hooks/load-query',
            'api-reference/hooks/use-lazy-load-query',
            'api-reference/hooks/use-fragment',
            'api-reference/hooks/use-refetchable-fragment',
            'api-reference/hooks/use-pagination-fragment',
            ...fbContent({
              internal: ['api-reference/hooks/use-blocking-pagination-fragment'],
              external: [],
            }),
            'api-reference/hooks/use-mutation',
            'api-reference/hooks/use-subscription',
          ],
          'Entrypoint APIs': [
            'api-reference/entrypoint-apis/use-entrypoint-loader',
            'api-reference/entrypoint-apis/load-entrypoint',
            'api-reference/entrypoint-apis/entrypoint-container',
          ],
          'Query Fetching': ['api-reference/query-fetching/fetch-query'],
          'Relay Runtime': ['api-reference/relay-runtime/store'],
          GraphQL: ['api-reference/graphql/graphql-and-directives'],
        },
        'api-reference/legacy-apis/legacy-apis',
      ],
      'Migration and Compatibility': [
        'migration-and-compatibility/upgrading-to-relay-hooks',
        'migration-and-compatibility/suspense-compatibility',
        'migration-and-compatibility/relay-hooks-and-legacy-container-apis',
      ],
      Guides,
    },
    'glossary/glossary',
    {
      Debugging: [
        'debugging/relay-devtools',
        'debugging/inconsistent-typename-error',
        ...fbContent({
          internal: [
            'debugging/fb/network-logger',
            'debugging/fb/debugging-phps',
            'debugging/fb/vscode-extension',
          ],
          external: [],
        }),
      ],
      'Principles and Architecture': [
        'principles-and-architecture/thinking-in-graphql',
        'principles-and-architecture/thinking-in-relay',
        'principles-and-architecture/architecture-overview',
        'principles-and-architecture/compiler-architecture',
        'principles-and-architecture/runtime-architecture',
        'principles-and-architecture/videos',
      ],
    },
    'community/learning-resources',
  ],
};
