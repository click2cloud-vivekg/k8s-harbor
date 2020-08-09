(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{377:function(t,e,a){t.exports=a.p+"assets/img/harbor_automatically_scan_images_on_push.3fa4828e.png"},378:function(t,e,a){t.exports=a.p+"assets/img/DockerHub_Replication.de8ba50b.svg"},379:function(t,e,a){t.exports=a.p+"assets/img/harbor_project_repository_list.7011b27a.png"},380:function(t,e,a){t.exports=a.p+"assets/img/harbor_project_library_examples-bookinfo-reviews-v3.ecf81b10.png"},381:function(t,e,a){t.exports=a.p+"assets/img/harbor_prevent_vulnerable_images_from_running.a6cbe95c.png"},382:function(t,e,a){t.exports=a.p+"assets/img/kuard_screenshot.39323cbd.png"},383:function(t,e,a){t.exports=a.p+"assets/img/harbor_project_new_member.da1ac377.png"},384:function(t,e,a){t.exports=a.p+"assets/img/harbor_project_members.4a0a8937.png"},385:function(t,e,a){t.exports=a.p+"assets/img/harbor_my_rbac_test_project.953b533b.png"},397:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"project-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-settings"}},[t._v("#")]),t._v(" Project settings")]),t._v(" "),s("p",[t._v("There are few project settings which are handy...")]),t._v(" "),s("h2",{attrs:{id:"automatically-scan-images-on-push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatically-scan-images-on-push"}},[t._v("#")]),t._v(" Automatically scan images on push")]),t._v(" "),s("p",[t._v('Enable automated vulnerability scan after each "image push" to the project:\n'),s("code",[t._v("library")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROJECT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aduser05:admin"')]),t._v(" -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/projects?name=library"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".[].project_id"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aduser05:admin"')]),t._v(" -X PUT "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/api/projects/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PROJECT_ID}")]),t._v('"')]),t._v(" -H  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("metadata"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("auto_scan"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("p",[t._v("You should see the following in the Web interface:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(377),alt:"Vulnerability scanning - Automatically scan images on push",title:"Vulnerability scanning - Automatically scan images on push"}})]),t._v(" "),s("p",[t._v("Tag the image:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker tag nginx:1.13.12 harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/nginx:1.13.12\n")])])]),s("p",[t._v("Push the container image to Harbor project "),s("code",[t._v("library")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker push harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/nginx:1.13.12\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("The push refers to repository [harbor.mylabs.dev/library/nginx]\n7ab428981537: Mounted from my_project/nginx\n82b81d779f83: Mounted from my_project/nginx\nd626a8ad97a1: Mounted from my_project/nginx\n1.13.12: digest: sha256:e4f0474a75c510f40b37b6b7dc2516241ffa8bde5a442bde3d372c9519c84d90 size: 948\n")])])]),s("p",[t._v("All images in that repositories should be automatically checked for\nvulnerabilities.")]),t._v(" "),s("h2",{attrs:{id:"scan-existing-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scan-existing-application"}},[t._v("#")]),t._v(" Scan existing application")]),t._v(" "),s("p",[t._v('I\'m going to replicate the "bookinfo" application used for testing Istio:\n'),s("a",{attrs:{href:"https://istio.io/docs/examples/bookinfo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/examples/bookinfo/"),s("OutboundLink")],1),t._v("\nWhen the replication completes all images should be automatically scanned\nbecause I'm going to replicate everything into "),s("code",[t._v("library")]),t._v(' project which has\n"Automatically scan images on push" feature enabled.')]),t._v(" "),s("p",[t._v("Create new Replication Rule and initiate replication:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COUNTER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("DOCKER_HUB_REPOSITORY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" istio/examples-bookinfo-details-v1 istio/examples-bookinfo-ratings-v1 istio/examples-bookinfo-productpage-v1 istio/examples-bookinfo-reviews-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COUNTER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$((")]),t._v("COUNTER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("))")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Replicating ('),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${COUNTER}")]),t._v("): "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOCKER_HUB_REPOSITORY}")]),t._v('"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/replication/policies"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n      '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("name"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Replication of "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOCKER_HUB_REPOSITORY}")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("docker-hub"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("https://hub.docker.com"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("description"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Replication Rule for "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOCKER_HUB_REPOSITORY}")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enabled"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true,\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("src_registry"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1\n      },\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("dest_namespace"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("library"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("filters"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": [{\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("name"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOCKER_HUB_REPOSITORY}")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n      },\n      {\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.1*"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n      }],\n      "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("trigger"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("manual"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n      }\n    }"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/replication/executions"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{ '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("policy_id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$((")]),t._v("COUNTER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("))")])]),t._v(' }"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Replicating (1): istio/examples-bookinfo-details-v1\nReplicating (2): istio/examples-bookinfo-ratings-v1\nReplicating (3): istio/examples-bookinfo-productpage-v1\nReplicating (4): istio/examples-bookinfo-reviews-v1\nReplicating (5): istio/examples-bookinfo-reviews-v2\nReplicating (6): istio/examples-bookinfo-reviews-v3\n")])])]),s("p",[s("img",{attrs:{src:a(378),alt:"DockerHub Replication",title:"DockerHub Replication"}})]),t._v(" "),s("p",[t._v('After a while all images used by "bookinfo" application should be replicated\ninto '),s("code",[t._v("library")]),t._v(" project and all should be automatically scanned.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(379),alt:"Harbor Project Repository list",title:"Harbor Project Repository list"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(380),alt:"Harbor Project library image list",title:"Harbor Project library image list"}})]),t._v(" "),s("h2",{attrs:{id:"prevent-vulnerable-images-from-running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prevent-vulnerable-images-from-running"}},[t._v("#")]),t._v(" Prevent vulnerable images from running")]),t._v(" "),s("p",[t._v("Now there are two container images in the "),s("code",[t._v("library")]),t._v(" repository:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("nginx:1.13.12")]),t._v(" - which has many vulnerabilities")]),t._v(" "),s("li",[s("code",[t._v("kuard:blue")]),t._v(" - which has no vulnerabilities")])]),t._v(" "),s("p",[t._v('Turn on the "Prevent vulnerable images from running" feature:')]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROJECT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aduser05:admin"')]),t._v(" -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/projects?name=library"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".[].project_id"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aduser05:admin"')]),t._v(" -X PUT "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/api/projects/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PROJECT_ID}")]),t._v('"')]),t._v(" -H  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("metadata"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("prevent_vul"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("severity"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("low"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(381),alt:"Harbor - Prevent vulnerable images from running",title:"Harbor - Prevent vulnerable images from running"}})]),t._v(" "),s("h2",{attrs:{id:"use-image-hosted-by-harbor-in-k8s-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-image-hosted-by-harbor-in-k8s-deployment"}},[t._v("#")]),t._v(" Use image hosted by Harbor in k8s deployment")]),t._v(" "),s("p",[t._v("Create "),s("code",[t._v("kuard")]),t._v(" deployment and expose it:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("kubectl run kuard --image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/kuard-amd64:blue --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" --expose"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true --labels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app=kuard"')]),t._v(" -n mytest\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.\nservice/kuard created\ndeployment.apps/kuard created\n")])])]),s("p",[t._v("Create Ingress for kuard service:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("APP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kuard\nenvsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/files/app_ingress.yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" kubectl create -f -\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ingress.extensions/kuard created\n")])])]),s("p",[t._v("You should be able to access kuard at "),s("a",{attrs:{href:"https://kuard.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kuard.mylabs.dev"),s("OutboundLink")],1),t._v("\nand see this:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(382),alt:"Kuard screenshot",title:"Kuard screenshot"}})]),t._v(" "),s("p",[t._v("Try the same with "),s("code",[t._v("nginx:1.13.12")]),t._v(" image:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("kubectl run nginx --image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/nginx:1.13.12 --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" --expose"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true --labels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app=nginx"')]),t._v(" -n mytest\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.\nservice/nginx created\ndeployment.apps/nginx created\n")])])]),s("p",[t._v("If you check the pods you will see they are not running:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nkubectl -n mytest get pods --selector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME                    READY   STATUS             RESTARTS   AGE\nnginx-d879bd8db-nmzc8   0/1     ImagePullBackOff   0          25s\n")])])]),s("p",[t._v("The details of one of the pods looks like:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("POD_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n mytest get pods --selector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx -o "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("jsonpath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{.items[0].metadata.name}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\nkubectl -n mytest describe pod "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$POD_NAME")]),t._v("\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Name:               nginx-d879bd8db-nmzc8\nNamespace:          mytest\nPriority:           0\nPriorityClassName:  <none>\nNode:               ip-192-168-56-161.eu-central-1.compute.internal/192.168.56.161\nStart Time:         Fri, 19 Jul 2019 12:52:21 +0200\nLabels:             app=nginx\n                    pod-template-hash=d879bd8db\nAnnotations:        kubernetes.io/psp: eks.privileged\nStatus:             Pending\nIP:                 192.168.61.206\nControlled By:      ReplicaSet/nginx-d879bd8db\nContainers:\n  nginx:\n    Container ID:\n    Image:          harbor.mylabs.dev/library/nginx:1.13.12\n    Image ID:\n    Port:           80/TCP\n    Host Port:      0/TCP\n    State:          Waiting\n      Reason:       ImagePullBackOff\n    Ready:          False\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from default-token-5lzmk (ro)\nConditions:\n  Type              Status\n  Initialized       True\n  Ready             False\n  ContainersReady   False\n  PodScheduled      True\nVolumes:\n  default-token-5lzmk:\n    Type:        Secret (a volume populated by a Secret)\n    SecretName:  default-token-5lzmk\n    Optional:    false\nQoS Class:       BestEffort\nNode-Selectors:  <none>\nTolerations:     node.kubernetes.io/not-ready:NoExecute for 300s\n                 node.kubernetes.io/unreachable:NoExecute for 300s\nEvents:\n  Type     Reason     Age                From                                                      Message\n  ----     ------     ----               ----                                                      -------\n  Normal   Scheduled  47s                default-scheduler                                         Successfully assigned mytest/nginx-d879bd8db-nmzc8 to ip-192-168-56-161.eu-central-1.compute.internal\n  Normal   BackOff    16s (x3 over 45s)  kubelet, ip-192-168-56-161.eu-central-1.compute.internal  Back-off pulling image "harbor.mylabs.dev/library/nginx:1.13.12"\n  Warning  Failed     16s (x3 over 45s)  kubelet, ip-192-168-56-161.eu-central-1.compute.internal  Error: ImagePullBackOff\n  Normal   Pulling    2s (x3 over 46s)   kubelet, ip-192-168-56-161.eu-central-1.compute.internal  pulling image "harbor.mylabs.dev/library/nginx:1.13.12"\n  Warning  Failed     2s (x3 over 46s)   kubelet, ip-192-168-56-161.eu-central-1.compute.internal  Failed to pull image "harbor.mylabs.dev/library/nginx:1.13.12": rpc error: code = Unknown desc = Error response from daemon: unknown: The severity of vulnerability of the image: "high" is equal or higher than the threshold in project setting: "high".\n  Warning  Failed     2s (x3 over 46s)   kubelet, ip-192-168-56-161.eu-central-1.compute.internal  Error: ErrImagePull\n')])])]),s("p",[t._v('You are not able to run docker images with "High" security issues. You can see\nthe error message: '),s("code",[t._v('The severity of vulnerability of the image: "high" is equal or higher than the threshold in project setting: "high".')])]),t._v(" "),s("h2",{attrs:{id:"project-rbac-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-rbac-settings"}},[t._v("#")]),t._v(" Project RBAC settings")]),t._v(" "),s("p",[t._v("YouTube video: "),s("a",{attrs:{href:"https://youtu.be/2ZIu9XTvsC0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/2ZIu9XTvsC0"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Create new project called "),s("code",[t._v("my_rbac_test_project")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" -X POST -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/projects"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("project_name"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("my_rbac_test_project"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("public"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': 0\n}"')]),t._v("\n")])])]),s("p",[t._v('Try to push the kuard image as a "Guest" user:')]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" admin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" docker login --username aduser03 --password-stdin harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("\ndocker tag gcr.io/kuar-demo/kuard-amd64:blue harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/my_rbac_test_project/kuard-amd64:blue\ndocker push harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/my_rbac_test_project/kuard-amd64:blue\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("WARNING! Your password will be stored unencrypted in /home/pruzicka/.docker/config.json.\nConfigure a credential helper to remove this warning. See\nhttps://docs.docker.com/engine/reference/commandline/login/#credentials-store\n\nLogin Succeeded\nThe push refers to repository [harbor.mylabs.dev/my_rbac_test_project/kuard-amd64]\n656e9c47289e: Preparing\nbcf2f368fe23: Preparing\ndenied: requested access to the resource is denied\n")])])]),s("ul",[s("li",[t._v("Guests are not allow to push anything into the projects as you can see from\nthe error message: "),s("code",[t._v("denied: requested access to the resource is denied")]),t._v(".")])]),t._v(" "),s("p",[t._v("Add user "),s("code",[t._v("aduser03")]),t._v(" on the project "),s("code",[t._v("my_rbac_test_project")]),t._v(" as a Developer:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROJECT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/projects?name=my_rbac_test_project"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".[].project_id"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -u "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" -X POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/api/projects/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PROJECT_ID}")]),t._v('/members"')]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("role_id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 2,\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("member_user"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("username"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("aduser03"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(383),alt:"Harbor - Project add new member",title:"Harbor - Project add new member"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(384),alt:"Harbor - Project members",title:"Harbor - Project members"}})]),t._v(" "),s("p",[t._v("Push the container image again:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker push harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/my_rbac_test_project/kuard-amd64:blue\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("The push refers to repository [harbor.mylabs.dev/my_rbac_test_project/kuard-amd64]\n656e9c47289e: Mounted from library/kuard-amd64\nbcf2f368fe23: Mounted from library/kuard-amd64\nblue: digest: sha256:1ecc9fb2c871302fdb57a25e0c076311b7b352b0a9246d442940ca8fb4efe229 size: 739\n")])])]),s("p",[t._v("Now the image was successfully uploaded:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(385),alt:"Harbor - Project - my_rbac_test_project",title:"Harbor - Project - my_rbac_test_project"}})]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);