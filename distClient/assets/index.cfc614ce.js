var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;import{P as d}from"./index.ad5cb2f3.js";import{g as i,u as l,Z as u,R as c}from"./vendor.ec12439b.js";import"./index.118d38bc.js";import"./index.esm.9fe3494d.js";const m=i`
  query GetUserPost($after: String, $userId: ID!) {
    userPosts(userId: $userId, first: 10, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          author {
            avatar
            lastName
            firstName
          }
          id
          likeCount
          content
          media
          createdAt
          commentCount
          isUserLiked
        }
      }
    }
  }
`;export default()=>{var e;const{id:i}=u(),{data:f}=(p=i,console.log(p),l(m,{variables:{userId:p}}));var p;const v=null==(e=null==f?void 0:f.userPosts)?void 0:e.edges;return c.createElement("div",{className:"space-y-2"},null==v?void 0:v.map(((e,i)=>{var l,u,m,f;return c.createElement("div",{className:"flex",key:null==(l=null==e?void 0:e.node)?void 0:l.id},c.createElement("div",{className:"w-full"},c.createElement(d,(m=((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&n(e,t,r[t]);return e})({},e.node),f={key:null==(u=e.node)?void 0:u.id},r(m,t(f))))))})))};
