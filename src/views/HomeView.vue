<script setup>

</script>

<template>

	<div class="p-4 md:w-3/4 md:mx-auto">
        <!-- navigation -->
        <nav class="font-medium flex justify-between">
            <div class="left flex space-x-2 text-3xl">
                <div class="img"><img class="w-9" src="img/leaf-svgrepo-com.svg" alt=""></div>
                <div class="companyName text-green-600">leaf</div>
            </div>
            <!-- Search bar -->
            <div class="center w-2/4 ">
                <div class="hidden sm:flex">
                    <img class="translate-x-8" src="img/search.svg" alt="">
                    <input type="text" placeholder="Search leaf ..."
                        class=" placeholder:font-light placeholder:text-white bg-green-300 p-1 px-10  rounded-3xl text-green-600 w-[100%] h-10">
                </div>
            </div>

            <!-- Add question btn -->
            <div class="btn hidden sm:block pt-2 px-3 text-white bg-green-300 rounded-3xl font-light ">+ Add question
            </div>


            <div class="right">
                <img class="w-10 sm:hidden" src="img/list.svg" alt="">
                <div class="account hidden sm:block"><img class="w-10" src="img/person-circle.svg" alt=""></div>
            </div>

        </nav>
        <!-- tags -->
        <div class="tags flex mt-6 space-x-2">
            <div class="tag border-2 border-green-300 p-1 px-2 rounded-2xl"><a href="#">countries</a></div>
            <div class="tag border-2 border-green-300 p-1 px-2 rounded-2xl"><a href="#">immigration</a></div>
        </div>
        <!-- question -->
        <div class="questions mt-4 space-y-2">
            <h3 class="text-3xl font-bold">Has anyone from the UK moved to the US and immediately regretted it?</h3>
            <div class="user">by <a href="#" class="underline text-sm">user012</a></div>
        </div>
        <!-- textarea -->
        <div class="textarea mt-12 flex w-4/5 mx-auto">
            <textarea name="" id="" class="p-4 text-green-300 border-2 border-green-300 rounded w-[100%] h-36"
                placeholder="Add an answer..."></textarea>
        </div>

        <!-- Questions Container -->
        <div class="questionContainer flex flex-row">
            <!-- Questions -->
            <div class="Replies md:w-2/3">
                <div class="Reply1 flex flex-row mt-9">
                    <div class="left flex flex-col items-center mt-3 mr-3">
                        <div class="top"><img class="w-10" src="img/top arrow.svg" alt=""></div>
                        <div class="text my-1">5.2k</div>
                        <div class="bottom"><img class="w-10" src="img/down arrow.svg" alt=""></div>
                    </div>
                    <div class="right border-l-2 border-green-300 px-4">
                        <div class="userName text-green-600">You</div>
                        <div class="reply">Not immediately regretted it.

                            Went to the USA in March 2000. Returned halloween 2006.

                            The first year was a culture shock as I did not move to NYC, I moved to Kentucky.

                            I was blinded by love and the dream.

                            This is how it went for me -

                            Realized the country is huge, but everywhere for 1000 miles is the same in every direction.
                            No
                            history, no change of scenery, just a million miles of road with the same franchised
                            restaurants,
                            stores, car dealerships and malls.

                            It was way too hot for me on most days. I sweat easily and unless your in the A/C you will
                        </div>
                    </div>
                </div>

            </div>
            <div class="right hidden md:block w-1/3 mt-9">
                <div class="h-screen border-2 border-green-300 rounded w-[100%] p-2 PX-3">
                    <h6 class="text-green-300 font-bold text-xl">Related questions</h6>

                    <div class="relatedQuestions">

                        <div class="question1 flex justify-center mt-5">
                            <div
                                class="questionViews text-white font-bold bg-green-300 h-6 w-1/3 pb-1 text-center mx-2 my-6 rounded-2xl">
                                5.3k
                            </div>
                            <div class="questionHeading">
                                Has anyone from
                                the
                                UK
                                moved to the
                                US and immediately
                                regretted
                                it?
                            </div>
                        </div>

                        <div class="question1 flex justify-center mt-5">
                            <div
                                class="questionViews text-white font-bold bg-green-300 h-6 w-1/3 pb-1 text-center mx-2 my-6 rounded-2xl">
                                5.3k
                            </div>
                            <div class="questionHeading">
                                Has anyone from
                                the
                                UK
                                moved to the
                                US and immediately
                                regretted
                                it?
                            </div>
                        </div>
                        <div class="question1 flex justify-center mt-5">
                            <div
                                class="questionViews text-white font-bold bg-green-300 h-6 w-1/3 pb-1 text-center mx-2 my-6 rounded-2xl">
                                5.3k
                            </div>
                            <div class="questionHeading">
                                Has anyone from
                                the
                                UK
                                moved to the
                                US and immediately
                                regretted
                                it?
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="h-60 bg-green-300 text-white p-10 px-5">
        <div class="contributors text-2xl text-center w-2/3">
            <p class="font-bold text-3xl">Contributors:</p>
            <ul class="ml-28">
                <li>- Contributor 1</li>
                <li>- Contributor 2</li>
            </ul>
        </div>
        <div class="hackathon text-4xl font-bold text-center mt-6">
            OSH HACKATHON
        </div>
    </footer>
=======
	<main>

	</main>
>>>>>>> fefc7a042919a042343c7c94d333aa3a454d9131
</template>