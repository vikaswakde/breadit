# Building a user-profile menu
 -src/components/UserAccountNav.tsx
 -npx shadcn-ui add dropdown
 -src/components/UserAvatar.tsx
 -npx shadcn-ui add avatar

# Intercepting the authetication-flow
 -src/app/@authModal
 -default.tsx 
 -/(.).sign-in
 --/page.tsx
 -src/components/CloseModal.tsx 
 -src/app/(auth)/sign-up/page.tsx 
 -src/app/components/SignUp.tsx 
 -/(.).sign-up 
 --/page.tsx 


 # creating & joining subredidts
 - schema.prisma 
 - src/app/page.tsx
 - src/app/r/create/page.tsx
 - npx shadcn-ui add input
 - lib/validators/subreddit.ts
 - src/app/components/Providers.tsx 
            - warp ~/layout.tsx with Providers 
 - src/app/api/subreddit/route.ts 
 - yarn prisma db push 
 - yarn prisma generate 
 - src/hooks/use-custom-toast.tsx 

# creating Subreddits
 - src/app/r/[slug]/page.tsx 
        --/layout.tsx 
 - src/config.ts 
 - src/compoents/MiniCreatePost.tsx 
 - src/components/SubscribeLeaveToogle.tsx 
 - src/app/api/subreddit/subscribe/route.ts 
 - src/app/api/subreddit/unsubscribe/route.ts 

# creating posts  & editor
 - src/app/r/[slug]/submit/page.tsx 
 - src/components/Editor.tsx 
 - src/lib/validators/post.ts
 - src/app/api/link/route.ts 
 -uploadthing => docs => follow it 
 -lib/uploadthing.ts 

 -src/app/api/subreddit/post/create/route.ts 
 - yarn prisma studio 

# Displaying Post feed & infinite Scrolling
 - app/r/[slug]/page.tsx => <PostFeed/>
 - src/components/PostFeed.tsx 
 - src/types/db.d.ts 
 - src/components/Post.tsx 
 - prisma file to make remove posts as optional for subreddit => yarn prisma db push  & npx prisma generate 
 - src/components/Providers.tsx <= <SessionProvider>{children}</sessionProvider>
 - src/components/EditorOutput.tsx 

# voting for posts 
-src/components/post-vote/PostVoteClient.tsx 
-lib/validators/vote.ts 
- /api/subreddit/post/vote/route.ts 
- src/types/redis.d.ts 
- login with upstash get redis_rest_url and redis_rest_token to .env 
= setting up redis
- lib/redis.ts 
= failing background api requests for posts
-/api/posts/route.ts <= for our PostFeed.tsx>
-r/[slug]/page.tsx  => db.subreddit => orderBy: {}


# custom feeds  for logged in and logged out 
- src/app/page.tsx 


# creating a performace-optimised post details page
- // render out content for each posts
- r/[slug]/post/[postId]/page.tsx   <= detail view for each post
- /src/components/post-vote/PostVoteServer.tsx

# creating and voting for comments 
- components/CommentsSection.tsx 
- components/PostComment.tsx 
- components/CreateComment.tsx
-----> npx shadcn-ui add label 
-----> npx shadcn-ui add textarea
- src/lib/validators/comment.ts 
- /api/subreddit/post/comment/route.ts	


# settings 
- src/app/settings/page.tsx 
-components/UserNameForm.tsx 
- /lib/validators/username.ts
npx shadn-ui  add card 
- /api/username/route.ts 

-yarn lint
-postintall: prisma generate 
-git remote remove origin 
- git add .
- git commit -m 'vikas'
- git push -u origin main  if not work then delte .git folder and do the process again  git init  git add . git commit -m '' git remote add origin  git push -u origin main 

-src/middleware.ts
-src/app/page.tsx  => export const dynamic = 'force-dynamic'



































