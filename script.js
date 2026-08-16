/* =========================================================
   CODE//VOID — problem data + application logic
   ========================================================= */

const DIFF = {
  'VOID-1': { label: 'EXTREME',  level: 1, class: 'v1' },
  'VOID-2': { label: 'NIGHTMARE',level: 2, class: 'v2' },
  'VOID-3': { label: 'INSANE',   level: 3, class: 'v3' },
  'VOID-4': { label: 'BRUTAL',   level: 4, class: 'v4' },
  'VOID-Ω': { label: 'RESEARCH', level: 5, class: 'v5' },
};

const CATEGORIES = [
  { key: 'algorithms',        name: 'Algorithms' },
  { key: 'data-structures',   name: 'Data Structures' },
  { key: 'graph-theory',      name: 'Graph Theory' },
  { key: 'dynamic-programming', name: 'Dynamic Programming' },
  { key: 'mathematics',       name: 'Mathematics' },
  { key: 'strings',           name: 'Strings' },
  { key: 'geometry',          name: 'Computational Geometry' },
  { key: 'os',                name: 'Operating Systems' },
  { key: 'systems',           name: 'Systems & Optimization' },
  { key: 'ai',                name: 'AI & Algorithms' },
];

// Each problem: id, title, catKey, diff, problem, input, output, constraints, exIn, exOut, challenge
const PROBLEMS = [

/* ===================== ALGORITHMS ===================== */
{
  id: 1, title: 'The Infinite Maze', catKey: 'algorithms', diff: 'VOID-4',
  problem: `You are given a maze represented as a directed graph with N nodes. Each edge (u,v) has a weight that changes over time according to a periodic function: weight(u,v,t) = ((a·t + b) mod m) + 1. You start at node S at time t = 0. Traversing any single edge always takes exactly 1 unit of time, and an edge may only be traversed at time t if its weight at that moment is odd. Determine whether there exists a sequence of moves that reaches node T at some time t ≤ 10^6, and if so, report the minimum such t.`,
  input: `Line 1: N M S T — number of nodes, number of edges, start node, target node.\nNext M lines: u v a b m — a directed edge from u to v with periodic weight parameters.`,
  output: `A single integer: the minimum time t at which T is first reachable, or -1 if it cannot be reached within 10^6 steps.`,
  constraints: `2 ≤ N ≤ 200,000\n1 ≤ M ≤ 500,000\n0 ≤ a, b < 10^9\n1 ≤ m ≤ 10^9\n1 ≤ S, T ≤ N`,
  exIn: `3 3 1 3\n1 2 1 0 2\n2 3 0 1 2\n1 3 5 5 6`,
  exOut: `2`,
  challenge: `Reachability under a clock that never stops moving.`,
},
{
  id: 2, title: 'Vanishing Intervals', catKey: 'algorithms', diff: 'VOID-3',
  problem: `You are given N intervals on the integer line. Interval i, [l_i, r_i], only exists during the time window [a_i, b_i]. Two intervals are called compatible if their value ranges overlap AND their time windows overlap. Find the size of the largest set of intervals that are pairwise compatible.`,
  input: `Line 1: N.\nNext N lines: l r a b.`,
  output: `A single integer: the maximum size of a pairwise-compatible set.`,
  constraints: `1 ≤ N ≤ 300,000\n0 ≤ l ≤ r ≤ 10^9\n0 ≤ a ≤ b ≤ 10^9`,
  exIn: `3\n1 5 0 10\n3 8 5 15\n10 20 20 30`,
  exOut: `2`,
  challenge: `Compatibility is a moving target in two dimensions at once.`,
},
{
  id: 3, title: 'The Last Permutation', catKey: 'algorithms', diff: 'VOID-4',
  problem: `A permutation of length N is built implicitly by applying M candidate swap operations, in order, to the identity permutation — operation i swaps positions p_i and q_i — but operation i is skipped entirely if i is divisible by any of K given blocked divisors. You may additionally choose, for every non-skipped operation, whether to actually apply it or skip it as well. Without materializing the full permutation, determine the position of the maximum value N in the lexicographically largest permutation reachable by applying any subset of the non-blocked operations, in their original relative order.`,
  input: `Line 1: N K M.\nLine 2: K blocked divisors.\nNext M lines: p q.`,
  output: `A single integer: the final position of value N.`,
  constraints: `1 ≤ N ≤ 10^6\n0 ≤ K ≤ 50\n1 ≤ M ≤ 10^6`,
  exIn: `4 1 3\n2\n1 4\n2 3\n3 4`,
  exOut: `4`,
  challenge: `Reconstruct the end of a story from the rules that shaped it, never the story itself.`,
},
{
  id: 4, title: 'Algorithmic Gravity', catKey: 'algorithms', diff: 'VOID-3',
  problem: `N objects sit on an infinite integer line at distinct positions, each with a mass. At every discrete time step, every object moves exactly one unit toward the nearest object of strictly greater mass (if a tie exists, toward the closer one; if none exists, the object does not move). Two objects that land on the same cell merge into one object whose mass is the sum of both. Simulate until no object moves for one full step, then output the final configuration.`,
  input: `Line 1: N.\nNext N lines: position mass.`,
  output: `The final number of distinct objects, followed by that many lines of "position mass", sorted by position.`,
  constraints: `1 ≤ N ≤ 200,000\n|position| ≤ 10^9\n1 ≤ mass ≤ 10^9\nGuaranteed to stabilize within 4×10^6 steps.`,
  exIn: `2\n0 1\n5 3`,
  exOut: `1\n5 4`,
  challenge: `A universe that collapses toward whatever is heaviest nearby.`,
},
{
  id: 5, title: 'The Impossible Scheduler', catKey: 'algorithms', diff: 'VOID-4',
  problem: `You are given N tasks on a single machine. Task i has duration d_i, deadline D_i, a set of prerequisite tasks that must fully complete before it may start, and a resource requirement r_i drawn from a shared pool of capacity C. The pool only limits tasks that are currently "startable" (all prerequisites done, not yet finished) — a startable task reserves r_i units of C for as long as it remains startable but unscheduled. Determine whether all N tasks can be completed by their deadlines without ever exceeding C in reserved resources among startable tasks, and if so output one valid execution order.`,
  input: `Line 1: N C.\nNext N lines: d D r k, followed by k prerequisite indices.`,
  output: `"POSSIBLE" followed by the schedule as a space-separated task order, or "IMPOSSIBLE".`,
  constraints: `1 ≤ N ≤ 100,000\n1 ≤ C ≤ 10^9\nPrerequisites form a DAG.`,
  exIn: `2 5\n3 5 2 0\n2 6 4 1 1`,
  exOut: `POSSIBLE\n1 2`,
  challenge: `A single machine, a shrinking clock, and a web of dependencies.`,
},

/* ===================== DATA STRUCTURES ===================== */
{
  id: 6, title: 'The Memory Monster', catKey: 'data-structures', diff: 'VOID-4',
  problem: `Design a structure over a multiset of integers, initially empty, supporting Q operations: INSERT x, DELETE x (removes one occurrence of x, guaranteed present), MIN, MAX, and HIST k — report what the minimum value of the multiset was immediately after the k-th INSERT/DELETE operation (1-indexed among INSERT/DELETE operations only; HIST and MIN/MAX queries do not count).`,
  input: `Line 1: Q.\nNext Q lines: one operation each.`,
  output: `One line of output for every MIN, MAX, or HIST query, in order.`,
  constraints: `1 ≤ Q ≤ 10^6\nAll values fit in a signed 64-bit integer.`,
  exIn: `5\nINSERT 5\nINSERT 2\nMIN\nHIST 1\nMAX`,
  exOut: `2\n5\n5`,
  challenge: `Remember not just what is true now, but what was true then.`,
},
{
  id: 7, title: 'The Self-Modifying Tree', catKey: 'data-structures', diff: 'VOID-4',
  problem: `You are given a rooted binary tree with N nodes, each holding an integer value. Process Q queries: QUERY v — output the sum of values on the path from the root to v under the tree's current shape; ROTATE v — perform a standard single rotation at node v (v becomes the new subtree root in place of its parent), which changes ancestor relationships while preserving the in-order sequence of nodes. Every ROTATE must be reflected in all subsequent QUERYs.`,
  input: `Line 1: N.\nLine 2: N parent indices (0 for the root).\nLine 3: N values.\nLine 4: Q.\nNext Q lines: queries.`,
  output: `One line of output for every QUERY, in order.`,
  constraints: `1 ≤ N, Q ≤ 300,000`,
  exIn: `3\n0 1 1\n2 3 4\n3\nQUERY 3\nROTATE 2\nQUERY 3`,
  exOut: `9\n9`,
  challenge: `The path to the answer keeps rewriting itself beneath your feet.`,
},
{
  id: 8, title: 'The Infinite Stack', catKey: 'data-structures', diff: 'VOID-3',
  problem: `Process Q operations on an initially empty stack: PUSH x, POP (removes the top element), or QUERY k — report the value that was on top of the stack immediately after the k-th PUSH overall occurred (1-indexed across all PUSH operations, regardless of any pops that happened afterward). It is guaranteed the referenced PUSH has already occurred when queried.`,
  input: `Line 1: Q.\nNext Q lines: operations.`,
  output: `One line of output per QUERY.`,
  constraints: `1 ≤ Q ≤ 10^6`,
  exIn: `5\nPUSH 3\nPUSH 7\nPOP\nQUERY 2\nPUSH 9`,
  exOut: `7`,
  challenge: `Nothing is ever truly popped from memory.`,
},
{
  id: 9, title: 'The Temporal Database', catKey: 'data-structures', diff: 'VOID-4',
  problem: `Maintain an array A of N integers (initially all zero) across an increasing sequence of versions, starting at version 0. Support: SET v i x — create version v (must equal one plus the highest existing version number) identical to version v−1 except position i is set to x; QUERY v i — output the value at position i in version v; QUERY v SUM l r — output the sum of positions l..r (inclusive) in version v.`,
  input: `Line 1: N Q.\nNext Q lines: operations as described.`,
  output: `One line of output per QUERY.`,
  constraints: `1 ≤ N ≤ 200,000\n1 ≤ Q ≤ 200,000`,
  exIn: `3 3\nSET 1 2 10\nQUERY 1 2\nQUERY 0 SUM 1 3`,
  exOut: `10\n0`,
  challenge: `Every change lives forever; nothing is overwritten, only added.`,
},
{
  id: 10, title: "The Data Structure That Shouldn't Exist", catKey: 'data-structures', diff: 'VOID-Ω',
  problem: `Maintain a dynamic multiset, initially empty, under operations: INSERT x, DELETE x, MEDIAN (lower median for even-size sets), KTH k (k-th smallest), RANGEFREQ l r (count of elements in [l, r]), and ROLLBACK t — revert the entire multiset to exactly the state it held immediately after the t-th operation was applied. Rollbacks themselves count as operations and may be targets of later rollbacks.`,
  input: `Line 1: Q.\nNext Q lines: operations.`,
  output: `One line of output for every MEDIAN, KTH, or RANGEFREQ query.`,
  constraints: `1 ≤ Q ≤ 500,000`,
  exIn: `6\nINSERT 5\nINSERT 1\nINSERT 9\nMEDIAN\nROLLBACK 2\nMEDIAN`,
  exOut: `5\n1`,
  challenge: `A structure that must remember every version of itself, forever.`,
},

/* ===================== GRAPH THEORY ===================== */
{
  id: 11, title: 'The Billion Node Network', catKey: 'graph-theory', diff: 'VOID-4',
  problem: `A graph has N nodes, where N can be astronomically large, but its edges are described implicitly: node u connects to node v if v = f(u) for one of K given linear functions f(x) = (a·x + b) mod N. Given a starting node S, determine the size of the connected component reachable from S using at most 10^7 total edge traversals during your search, or report that it exceeds that bound.`,
  input: `Line 1: N K S.\nNext K lines: a b.`,
  output: `The component size, or "OVERFLOW" if more than 10^7 traversals would be required to fully explore it.`,
  constraints: `1 ≤ N ≤ 10^18\n1 ≤ K ≤ 20`,
  exIn: `7 1 1\n3 0`,
  exOut: `6`,
  challenge: `The graph is too large to see, so you must reason about it instead.`,
},
{
  id: 12, title: 'The Corrupted Map', catKey: 'graph-theory', diff: 'VOID-3',
  problem: `Given a directed graph where every edge carries a probability (as a fraction) of being usable, find the path from S to T that maximizes the product of edge probabilities along it — the most reliable path. Output that maximum reliability as a reduced fraction, or "0/1" if no path exists.`,
  input: `Line 1: N M S T.\nNext M lines: u v p_num p_den.`,
  output: `The maximum reliability as a reduced fraction "num/den".`,
  constraints: `1 ≤ N ≤ 100,000\n1 ≤ M ≤ 300,000`,
  exIn: `3 2 1 3\n1 2 1 2\n2 3 1 2`,
  exOut: `1/4`,
  challenge: `Certainty is not available; you must optimize for the least unlikely truth.`,
},
{
  id: 13, title: 'The Graph That Changes', catKey: 'graph-theory', diff: 'VOID-4',
  problem: `Starting from N labeled nodes with no edges, process Q operations: ADD u v, REMOVE u v (guaranteed present), or QUERY u v — report whether u and v are currently connected.`,
  input: `Line 1: N Q.\nNext Q lines: operations.`,
  output: `"YES" or "NO" for every QUERY.`,
  constraints: `1 ≤ N ≤ 200,000\n1 ≤ Q ≤ 200,000`,
  exIn: `4 4\nADD 1 2\nADD 2 3\nQUERY 1 3\nREMOVE 2 3\nQUERY 1 3`,
  exOut: `YES\nNO`,
  challenge: `Connectivity that must be tracked through both creation and destruction.`,
},
{
  id: 14, title: 'The Recursive Network', catKey: 'graph-theory', diff: 'VOID-Ω',
  problem: `A meta-graph has N top-level slots. Slot i contains its own graph with n_i internal nodes and its own edge list, using local labels. A cross-link connects an internal node labeled a in graph i to the internal node labeled a in graph j (i ≠ j) whenever both graph i and graph j independently contain an edge (a, b) for some shared label b. Considering the union of all internal nodes across all graphs plus every such cross-link, determine the total number of connected components — without ever materializing all cross-links explicitly.`,
  input: `Line 1: N.\nFor each of the N graphs: n_i, then its edge list (local labels).`,
  output: `A single integer: the total number of connected components.`,
  constraints: `1 ≤ N ≤ 1,000\nSum of n_i ≤ 200,000\nSum of edges ≤ 500,000`,
  exIn: `2\n2\n1 2\n2\n1 2`,
  exOut: `1`,
  challenge: `A universe of graphs, linked by coincidence of labeling.`,
},
{
  id: 15, title: 'The Impossible Coloring', catKey: 'graph-theory', diff: 'VOID-4',
  problem: `Starting from N nodes with no edges, process Q operations: ADD u v, REMOVE u v, or CHECK k — after this operation, determine whether the current graph can be properly colored with k colors (adjacent nodes always differ), for k ≤ 4. It is guaranteed that at every CHECK, the current graph is either bipartite, an odd cycle-based graph requiring exactly 3 colors, or otherwise colorable with 4.`,
  input: `Line 1: N Q.\nNext Q lines: operations.`,
  output: `"YES" or "NO" for every CHECK.`,
  constraints: `1 ≤ N ≤ 100,000\n1 ≤ Q ≤ 200,000`,
  exIn: `3 3\nADD 1 2\nADD 2 3\nCHECK 2`,
  exOut: `YES`,
  challenge: `Determine, on the fly, whether harmony is still possible.`,
},

/* ===================== DYNAMIC PROGRAMMING ===================== */
{
  id: 16, title: 'The State Explosion', catKey: 'dynamic-programming', diff: 'VOID-4',
  problem: `A counter starts at 0. You must apply exactly N operations in order; operation i is either "+a_i" or "×b_i", your choice, and the counter must remain within [0, 10^18] after every operation (a choice is unavailable at step i if it would violate this). Maximize the final counter value, or report "IMPOSSIBLE" if some step has no legal choice.`,
  input: `Line 1: N.\nNext N lines: a_i b_i.`,
  output: `The maximum achievable final value, or "IMPOSSIBLE".`,
  constraints: `1 ≤ N ≤ 200,000\n1 ≤ a_i, b_i ≤ 10^9`,
  exIn: `2\n3 2\n5 3`,
  exOut: `9`,
  challenge: `Not every reachable state is worth remembering, but you must find the one that is.`,
},
{
  id: 17, title: 'The Recursive Universe', catKey: 'dynamic-programming', diff: 'VOID-Ω',
  problem: `You are given a tree with N nodes rooted at node 1, each node i holding a value v_i (which may be negative). Choose a subset of nodes maximizing the sum of chosen values such that no chosen node is the parent of another chosen node — the classic maximum-weight independent set on a tree, but where choosing any node conceptually reopens the same optimization problem, independently, on each of its children's subtrees.`,
  input: `Line 1: N.\nLine 2: N values v_1..v_N.\nNext N−1 lines: parent-child edges.`,
  output: `A single integer: the maximum achievable total value.`,
  constraints: `1 ≤ N ≤ 200,000\n|v_i| ≤ 10^9`,
  exIn: `3\n1 2 3\n1 2\n1 3`,
  exOut: `5`,
  challenge: `Every choice spawns its own smaller version of the same impossible decision.`,
},
{
  id: 18, title: 'The Forbidden Sequence', catKey: 'dynamic-programming', diff: 'VOID-4',
  problem: `Given a sequence of N integers and K forbidden value-triples (x, y, z), find the length of the longest strictly increasing subsequence such that no three consecutive elements of the chosen subsequence match any forbidden triple exactly, in order.`,
  input: `Line 1: N K.\nLine 2: N integers.\nNext K lines: x y z.`,
  output: `A single integer: the length of the longest valid subsequence.`,
  constraints: `1 ≤ N ≤ 200,000\n0 ≤ K ≤ 100,000`,
  exIn: `5 1\n1 3 2 4 5\n1 3 4`,
  exOut: `4`,
  challenge: `Growth is easy; growth without forbidden patterns is not.`,
},
{
  id: 19, title: 'The Infinite Knapsack', catKey: 'dynamic-programming', diff: 'VOID-4',
  problem: `Items are generated by index i = 1, 2, 3, ...: item i has weight w(i) = (i² mod P) + 1 and value val(i) = ((i·Q) mod R) + 1. Given a knapsack of capacity C, and that only items with index ≤ L may be considered, determine the maximum total value achievable without exceeding capacity C (each item usable at most once).`,
  input: `Line 1: P Q R L C.`,
  output: `A single integer: the maximum achievable value.`,
  constraints: `1 ≤ L ≤ 5,000\n1 ≤ C ≤ 100,000`,
  exIn: `5 3 7 3 5`,
  exOut: `7`,
  challenge: `The items you could choose are infinite; the ones you may choose are not.`,
},
{
  id: 20, title: 'The Multiverse Path', catKey: 'dynamic-programming', diff: 'VOID-Ω',
  problem: `You start at position 0 at time 0. At every integer time step you choose to move +1 or −1. Whenever a branch's current position is even at the moment of a step, the universe forks: a sibling branch is created that takes the opposite move at that same step, and both branches then continue independently. Every step i costs e_i units of energy, deducted from that branch's running total; a branch is discarded the instant its cumulative energy exceeds budget B. After exactly N steps, determine the maximum position reached by any surviving branch, or "NONE" if no branch survives.`,
  input: `Line 1: N B.\nLine 2: N energy costs e_1..e_N.`,
  output: `The maximum final position among surviving branches, or "NONE".`,
  constraints: `1 ≤ N ≤ 40\n1 ≤ B ≤ 10^9\n1 ≤ e_i ≤ 10^7`,
  exIn: `2 10\n3 4`,
  exOut: `2`,
  challenge: `Every fork in the road really does fork, and you must find the best of all worlds.`,
},

/* ===================== MATHEMATICS ===================== */
{
  id: 21, title: 'The Prime Machine', catKey: 'mathematics', diff: 'VOID-4',
  problem: `An integer X is defined as the product of pᵢ^aᵢ over K given distinct primes and exponents (X itself is far too large to compute directly). Without fully computing X, determine X mod M, and determine whether X is a perfect power (X = y^k for some integers y ≥ 2, k ≥ 2).`,
  input: `Line 1: K M.\nNext K lines: p a.`,
  output: `Line 1: X mod M.\nLine 2: "YES" or "NO" for whether X is a perfect power.`,
  constraints: `1 ≤ K ≤ 1,000\nPrimes distinct, ≤ 10^6\n1 ≤ a_i ≤ 10^9\n1 ≤ M ≤ 10^9`,
  exIn: `2 1000\n2 3\n3 2`,
  exOut: `72\nNO`,
  challenge: `Reason about a number too large to ever write down.`,
},
{
  id: 22, title: 'The Number That Refuses to End', catKey: 'mathematics', diff: 'VOID-Ω',
  problem: `A sequence is defined by a₁ = S, a_{n+1} = (a_n·A + B) mod M. Given S, A, B, M, and a target T, determine whether T ever appears in the sequence (which must eventually cycle, since its state space is finite), and if so, the smallest index n at which it first appears.`,
  input: `Line 1: S A B M T.`,
  output: `The smallest such index, or "NEVER".`,
  constraints: `0 ≤ S, A, B, T < M ≤ 10^9`,
  exIn: `1 2 3 7 5`,
  exOut: `2`,
  challenge: `Search an infinite loop for a needle that may not exist.`,
},
{
  id: 23, title: 'The Perfect Partition', catKey: 'mathematics', diff: 'VOID-4',
  problem: `Partition a set of N distinct positive integers into exactly K non-empty groups such that every group has equal size AND equal sum. Determine whether such a partition exists, and if so output one valid assignment.`,
  input: `Line 1: N K (N divisible by K).\nLine 2: N integers.`,
  output: `"YES" followed by a group index (1..K) for each element in input order, or "NO".`,
  constraints: `1 ≤ N ≤ 100,000\n1 ≤ K ≤ 20`,
  exIn: `4 2\n1 4 2 3`,
  exOut: `YES\n1 1 2 2`,
  challenge: `Fairness must hold in both size and value, simultaneously.`,
},
{
  id: 24, title: 'The Impossible Equation', catKey: 'mathematics', diff: 'VOID-Ω',
  problem: `Given K nonlinear Diophantine equations of the form Σⱼ cᵢⱼ·xⱼ² + Σⱼ dᵢⱼ·xⱼ = eᵢ over N unknowns x₁..x_N, each bounded 0 ≤ xⱼ ≤ U, determine whether an integer solution exists, and if so output one.`,
  input: `Line 1: N K U.\nNext K lines: N c-values, N d-values, then e.`,
  output: `"YES" followed by the x values, or "NO".`,
  constraints: `1 ≤ N ≤ 8\n1 ≤ K ≤ 8\n0 ≤ U ≤ 100`,
  exIn: `2 1 5\n1 0 2 0 8`,
  exOut: `YES\n2 0`,
  challenge: `Curvature makes the search space far less forgiving than lines ever were.`,
},
{
  id: 25, title: 'The Hidden Pattern', catKey: 'mathematics', diff: 'VOID-4',
  problem: `Given a sequence of N integers, find the smallest offset D and smallest period P such that a_i = a_{i+P} holds for every valid i ≥ D (1-indexed) — i.e., the sequence is eventually periodic from index D onward, with minimal period P.`,
  input: `Line 1: N.\nLine 2: N integers.`,
  output: `Two integers: D and P.`,
  constraints: `1 ≤ N ≤ 500,000`,
  exIn: `6\n1 2 3 2 3 2`,
  exOut: `2 2`,
  challenge: `Find the rule the sequence didn't tell you it was following.`,
},

/* ===================== STRINGS ===================== */
{
  id: 26, title: 'The Infinite String', catKey: 'strings', diff: 'VOID-4',
  problem: `Define S₀ = "a". For k ≥ 1, Sₖ = S_{k−1} + flip(S_{k−1}) + S_{k−1}, where flip replaces every 'a' with 'b' and every 'b' with 'a'. Note |Sₖ| = 3^k. Given k and Q queries, each asking for the character at a 1-indexed position p in Sₖ, answer every query without constructing Sₖ.`,
  input: `Line 1: k Q.\nLine 2: Q positions.`,
  output: `Q characters, one per line.`,
  constraints: `0 ≤ k ≤ 40\n1 ≤ Q ≤ 200,000`,
  exIn: `2 3\n1 4 5`,
  exOut: `a\nb\na`,
  challenge: `A string exponentially large, queried one character at a time.`,
},
{
  id: 27, title: 'The Broken Compression', catKey: 'strings', diff: 'VOID-3',
  problem: `A compression scheme builds a string via operations: LIT c (append a single character c), or REP k (append a copy of the last k characters currently built, where k must not exceed the current length). Given a target string T, find the minimum number of operations required to construct T exactly.`,
  input: `Line 1: T.`,
  output: `A single integer: the minimum number of operations.`,
  constraints: `1 ≤ |T| ≤ 200,000`,
  exIn: `aabaab`,
  exOut: `4`,
  challenge: `Find the shortest recipe for a string that keeps copying itself.`,
},
{
  id: 28, title: 'The String Universe', catKey: 'strings', diff: 'VOID-Ω',
  problem: `You are given M strings, each built by the recursive rule from "The Infinite String" (S₀ = its own seed character, Sₖ = S_{k−1} + flip(S_{k−1}) + S_{k−1}), each with its own seed and its own final level kᵢ. For each of Q queries (i, j), determine whether string i (at its final level) is exactly equal to string j (at its final level), without materializing either string.`,
  input: `Line 1: M.\nNext M lines: seed_char kᵢ.\nNext line: Q.\nNext Q lines: i j.`,
  output: `"YES" or "NO" per query.`,
  constraints: `1 ≤ M ≤ 1,000\n0 ≤ kᵢ ≤ 40\n1 ≤ Q ≤ 100,000`,
  exIn: `2\na 2\na 2\n1\n1 2`,
  exOut: `YES`,
  challenge: `Compare two infinities built from the same seed.`,
},
{
  id: 29, title: 'The Vanishing Pattern', catKey: 'strings', diff: 'VOID-4',
  problem: `Process a stream of N events, each one of: ADD_PATTERN p (add pattern p to the active set), REMOVE_PATTERN p (remove one instance of p from the active set), or SCAN t (given a text chunk t, output the total number of occurrences of all currently active patterns within t, summed together).`,
  input: `Line 1: N.\nNext N lines: events (SCAN lines include the text chunk).`,
  output: `One integer per SCAN event.`,
  constraints: `Total pattern length + total scanned text length ≤ 10^6`,
  exIn: `3\nADD_PATTERN ab\nADD_PATTERN ba\nSCAN ababa`,
  exOut: `4`,
  challenge: `Track patterns that can disappear as fast as they appeared.`,
},
{
  id: 30, title: 'The Last Subsequence', catKey: 'strings', diff: 'VOID-4',
  problem: `Given a string S of length N over lowercase letters and an integer K, find the length of the longest subsequence of S that is a palindrome AND uses each of the 26 letters at most K times.`,
  input: `Line 1: S.\nLine 2: K.`,
  output: `A single integer: the length of the longest valid subsequence.`,
  constraints: `1 ≤ N ≤ 200,000\n1 ≤ K ≤ N`,
  exIn: `abcba\n2`,
  exOut: `5`,
  challenge: `Symmetry constrained by scarcity.`,
},

/* ===================== COMPUTATIONAL GEOMETRY ===================== */
{
  id: 31, title: 'The Infinite Polygon', catKey: 'geometry', diff: 'VOID-Ω',
  problem: `P₀ is a unit square. Pₖ is formed by attaching, outward, to the midpoint of every edge of P_{k−1}, a smaller square of side length 1/3 of that edge, then removing the interior seams — a Koch-like crenellated boundary. Given k, compute the exact area of Pₖ and its exact boundary length (in units of the original side), both as reduced fractions, without constructing the polygon explicitly.`,
  input: `Line 1: k.`,
  output: `Line 1: area as a reduced fraction.\nLine 2: boundary length as a reduced fraction.`,
  constraints: `0 ≤ k ≤ 30`,
  exIn: `0`,
  exOut: `1/1\n4/1`,
  challenge: `A shape that grows more intricate forever, but must still be measured exactly.`,
},
{
  id: 32, title: 'The Moving Points', catKey: 'geometry', diff: 'VOID-4',
  problem: `N points (N even) move on a 2D plane; point i is at (x0ᵢ + vxᵢ·t, y0ᵢ + vyᵢ·t). Region A is the convex hull of the first half of the points (input order); region B is the convex hull of the second half — both recomputed continuously as points move. Determine the first time t ≥ 0 at which A and B intersect, or report "NEVER".`,
  input: `Line 1: N.\nNext N lines: x0 y0 vx vy.`,
  output: `The first intersection time as a reduced fraction, or "NEVER".`,
  constraints: `2 ≤ N ≤ 2,000\n|coordinates|, |velocities| ≤ 10^6`,
  exIn: `4\n0 0 1 0\n0 1 1 0\n5 0 -1 0\n5 1 -1 0`,
  exOut: `5/2`,
  challenge: `Predict a collision between two shapes that never stop changing.`,
},
{
  id: 33, title: 'The Impossible Convex Hull', catKey: 'geometry', diff: 'VOID-4',
  problem: `Starting from an empty point set, process Q operations: ADD x y, REMOVE x y (removes one instance of an existing point), or HULL — output the current convex hull's perimeter as a reduced fraction ("0/1" if fewer than 2 distinct points remain).`,
  input: `Line 1: Q.\nNext Q lines: operations.`,
  output: `One line of output per HULL query.`,
  constraints: `1 ≤ Q ≤ 200,000`,
  exIn: `4\nADD 0 0\nADD 4 0\nADD 0 3\nHULL`,
  exOut: `12/1`,
  challenge: `A boundary that must be recomputed every time the world adds or takes away a point.`,
},
{
  id: 34, title: 'Geometry From Shadows', catKey: 'geometry', diff: 'VOID-Ω',
  problem: `A convex planar polygon with N vertices exists in 3D. It is illuminated from K different directions, producing K orthographic 2D shadow polygons projected onto planes perpendicular to each light direction. Given only the K shadows (as ordered vertex lists) and their light directions, reconstruct the original polygon's 3D vertex coordinates. A unique solution up to the given precision is guaranteed.`,
  input: `Line 1: K.\nFor each of K shadows: light direction (dx dy dz), vertex count, then that many 2D coordinates.`,
  output: `N followed by the reconstructed 3D coordinates, in a consistent vertex order.`,
  constraints: `2 ≤ K ≤ 6\n3 ≤ N ≤ 100`,
  exIn: `2\n0 0 1 4\n0 0 4 0 4 4 0 4\n1 0 0 4\n0 0 4 0 4 4 0 4`,
  exOut: `4\n0 0 0\n4 0 0\n4 4 0\n0 4 0`,
  challenge: `Rebuild a solid object from nothing but the shapes of its shadows.`,
},
{
  id: 35, title: 'The Fractal Collision', catKey: 'geometry', diff: 'VOID-Ω',
  problem: `Two fractal shapes are each generated by an iterated function system (a set of affine transformations — 2×2 matrix plus translation — applied recursively to a starting unit square) evaluated to depth k, meaning the union of images of the square under every length-k composition of the transformations. Given both IFS descriptions and a shared depth k, determine whether the two depth-k approximations intersect (share any area).`,
  input: `For each of 2 shapes: transformation count, then each transformation as "a b c d tx ty" (2×2 matrix a,b,c,d and translation tx,ty).\nFinal line: k.`,
  output: `"YES" or "NO".`,
  constraints: `1 ≤ transformations ≤ 4 per shape\n0 ≤ k ≤ 6`,
  exIn: `1\n0.5 0 0 0.5 0 0\n1\n0.5 0 0 0.5 10 10\n2`,
  exOut: `NO`,
  challenge: `Determine contact between two infinitely detailed shapes using only a handful of iterations.`,
},

/* ===================== OPERATING SYSTEMS ===================== */
{
  id: 36, title: 'The Perfect Scheduler', catKey: 'os', diff: 'VOID-4',
  problem: `Given N processes with arrival time aᵢ, burst time bᵢ, priority prᵢ, and dependency processes that must fully complete before it may start, and C identical CPU cores (preemption allowed at integer time units; dependencies must fully finish before a dependent process starts), compute the minimum possible makespan — the earliest time by which all processes can finish — under an optimal schedule.`,
  input: `Line 1: N C.\nNext N lines: a b pr k, followed by k dependency indices.`,
  output: `A single integer: the minimum makespan.`,
  constraints: `1 ≤ N ≤ 100,000\n1 ≤ C ≤ 1,000\nDependencies form a DAG.`,
  exIn: `2 1\n0 3 1 0\n0 2 2 1 1`,
  exOut: `5`,
  challenge: `One core, many demands, and a dependency chain that can't be rushed.`,
},
{
  id: 37, title: 'The Deadlock Universe', catKey: 'os', diff: 'VOID-4',
  problem: `Given P processes and R resource types with fixed total instances per type, and each process's declared maximum future claim per resource type, process a stream of Q events (REQUEST proc resource count, RELEASE proc resource count). After each event, determine — using a banker's-algorithm-style safety check — whether the system is currently in a safe state, outputting "SAFE" or "UNSAFE".`,
  input: `Line 1: P R.\nLine 2: R total instances.\nNext P lines: R maximum claims each.\nNext line: Q.\nNext Q lines: events.`,
  output: `"SAFE" or "UNSAFE" after every event.`,
  constraints: `1 ≤ P ≤ 1,000\n1 ≤ R ≤ 20\n1 ≤ Q ≤ 100,000`,
  exIn: `2 1\n5\n3\n4\n1\nREQUEST 1 1 2`,
  exOut: `SAFE`,
  challenge: `Determine, before it happens, whether the system is walking into a trap.`,
},
{
  id: 38, title: 'The Memory Allocator', catKey: 'os', diff: 'VOID-4',
  problem: `Simulate a best-fit memory allocator over a heap of total size H, serving a stream of N requests (ALLOC size, FREE id), where best-fit means: use the smallest free block that fits, breaking ties by lowest starting address. The request sequence is adversarially crafted to maximize fragmentation. For every ALLOC, output the starting address used, or "FAIL" if no block fits.`,
  input: `Line 1: H N.\nNext N lines: requests.`,
  output: `One line per ALLOC request (address, or "FAIL").`,
  constraints: `1 ≤ H ≤ 10^9\n1 ≤ N ≤ 200,000`,
  exIn: `100 3\nALLOC 40\nALLOC 30\nFREE 1`,
  exOut: `0\n40`,
  challenge: `Defend against fragmentation engineered by an adversary who knows your strategy.`,
},
{
  id: 39, title: 'The Cache Oracle', catKey: 'os', diff: 'VOID-Ω',
  problem: `Given a cache of capacity K and a complete memory access sequence of length N known entirely in advance, determine the minimum possible number of cache misses achievable by any eviction policy — the theoretical optimum, achieved by evicting whichever cached item's next use is furthest in the future (or never used again).`,
  input: `Line 1: K N.\nLine 2: N memory addresses.`,
  output: `A single integer: the minimum number of misses.`,
  constraints: `1 ≤ K ≤ 100,000\n1 ≤ N ≤ 10^6`,
  exIn: `2 5\n1 2 3 1 2`,
  exOut: `4`,
  challenge: `Know the future perfectly, and still work to minimize what you lose.`,
},
{
  id: 40, title: 'The Distributed Clock', catKey: 'os', diff: 'VOID-Ω',
  problem: `N machines each generate a sequence of local events, and M message relations of the form (machine e, event e, machine f, event f) each mean event e happened-before event f. Determine whether a consistent global total ordering of all events exists that respects every happened-before relation, and if so output one such ordering; otherwise output "INCONSISTENT".`,
  input: `Line 1: N.\nFor each machine: its event count.\nNext line: M.\nNext M lines: machine_e event_e machine_f event_f.`,
  output: `"INCONSISTENT", or the ordering as one "machine event" pair per line.`,
  constraints: `1 ≤ N ≤ 1,000\nTotal events ≤ 200,000\nTotal messages ≤ 200,000`,
  exIn: `2\n2\n2\n1\n1 1 2 1`,
  exOut: `1 1\n1 2\n2 1\n2 2`,
  challenge: `Find one true order hiding inside many partial truths.`,
},

/* ===================== SYSTEMS & OPTIMIZATION ===================== */
{
  id: 41, title: 'The Compression Limit', catKey: 'systems', diff: 'VOID-Ω',
  problem: `A dataset has N rows and M independent integer columns. For a single column, three encoding costs are defined, where b is the number of bits needed for the column's maximum value (b = 1 if max = 0, else ⌈log₂(max+1)⌉): RAW = N·b. DELTA = b + (N−1)·bd, where bd is the number of bits needed for the maximum absolute consecutive delta (minimum 1). DICT = N·⌈log₂(D)⌉ + D·b, where D is the number of distinct values (the first term is 0 if D = 1). For each column, take the minimum of the three, then sum over all columns.`,
  input: `Line 1: N M.\nNext N lines: M integers each (one row).`,
  output: `A single integer: the minimum total bits across all columns.`,
  constraints: `1 ≤ N ≤ 200,000\n1 ≤ M ≤ 50\nValues fit in a signed 64-bit integer.`,
  exIn: `3 1\n5\n5\n5`,
  exOut: `3`,
  challenge: `Squeeze every unnecessary bit out of a dataset that fights back.`,
},
{
  id: 42, title: 'The Network Bottleneck', catKey: 'systems', diff: 'VOID-4',
  problem: `Given an undirected network of N nodes and M edges, each with a bandwidth capacity, and a stream of Q events (FAIL edge_id, RESTORE edge_id), output the maximum flow from source S to sink T after each event.`,
  input: `Line 1: N M S T.\nNext M lines: u v capacity.\nNext line: Q.\nNext Q lines: events.`,
  output: `One integer per event: the max flow after applying it.`,
  constraints: `1 ≤ N ≤ 1,000\n1 ≤ M ≤ 5,000\n1 ≤ Q ≤ 1,000`,
  exIn: `3 2 1 3\n1 2 5\n2 3 3\n1\nFAIL 2`,
  exOut: `0`,
  challenge: `Keep the data flowing while the network falls apart around it.`,
},
{
  id: 43, title: 'The Energy Problem', catKey: 'systems', diff: 'VOID-4',
  problem: `N non-preemptible tasks must each run for dᵢ time units and finish by deadline Dᵢ on a single processor with K discrete speed levels; level j runs tasks at speed sⱼ (actual run time = dᵢ / sⱼ) while drawing power pⱼ for that entire duration (energy = power × time). The speed level may only change between tasks. Find the minimum total energy to complete all tasks by their deadlines, in a fixed input task order, or "IMPOSSIBLE".`,
  input: `Line 1: N K.\nNext K lines: s p.\nNext N lines: d D.`,
  output: `The minimum total energy, or "IMPOSSIBLE".`,
  constraints: `1 ≤ N ≤ 100,000\n1 ≤ K ≤ 20`,
  exIn: `1 2\n1 1\n2 3\n4 3`,
  exOut: `6`,
  challenge: `Speed costs power; slowness costs time you don't have.`,
},
{
  id: 44, title: 'The Self-Optimizing System', catKey: 'systems', diff: 'VOID-Ω',
  problem: `A system processes N operations in a fixed sequence under one of K configurations at a time. Operation i costs cost[config][i] to run in a given configuration, and running it automatically transitions the system to configuration next[config][i] for the following operation. You may override the automatic transition at up to B points during the run, each override costing a fixed overrideCost and forcing any configuration of your choice for the next operation. Determine the minimum total cost (operation costs plus override costs) to process all N operations, starting from configuration 1.`,
  input: `Line 1: N K B.\nNext K lines: N operation costs for that configuration.\nNext K lines: N next-configuration indices for that configuration.\nFinal line: overrideCost.`,
  output: `A single integer: the minimum total cost.`,
  constraints: `1 ≤ N ≤ 5,000\n1 ≤ K ≤ 50\n0 ≤ B ≤ N`,
  exIn: `2 2 1\n1 5\n5 1\n2 1\n1 2\n3`,
  exOut: `4`,
  challenge: `Steer a machine that keeps changing its own rules as it runs.`,
},
{
  id: 45, title: 'The Impossible Database', catKey: 'systems', diff: 'VOID-Ω',
  problem: `A dataset of N records is too large to fit in memory: only a buffer of B records may be held at once, and data must be read sequentially in blocks of size B. You must answer Q range-sum queries (SUM l r over a single numeric field) while building any auxiliary structures that fit in a memory budget of M records (B ≤ M ≤ N). Determine the minimum number of full sequential passes over the dataset required to guarantee every query can be answered exactly.`,
  input: `Line 1: N B M Q.\nNext Q lines: l r.`,
  output: `A single integer: the minimum number of passes required.`,
  constraints: `1 ≤ B ≤ M ≤ N ≤ 10^9\n1 ≤ Q ≤ 100,000`,
  exIn: `1000 10 20 5\n0 999\n1 1\n2 2\n3 3\n4 4`,
  exOut: `1`,
  challenge: `Answer everything, but touch the data as little as possible.`,
},

/* ===================== AI & ALGORITHMS ===================== */
{
  id: 46, title: 'The Adversarial Classifier', catKey: 'ai', diff: 'VOID-4',
  problem: `Given N labeled points in 1D (value xᵢ, label +1 or −1), you will choose a threshold t and an orientation to classify points as +1 if x > t else −1 (or the reverse orientation), minimizing misclassifications. Before you choose, an adversary may flip up to K labels, chosen to maximize the minimum error you can still achieve. Determine the resulting minimax number of misclassifications under optimal adversarial play.`,
  input: `Line 1: N K.\nNext N lines: x label.`,
  output: `A single integer: the minimax number of misclassifications.`,
  constraints: `1 ≤ N ≤ 200,000\n0 ≤ K ≤ N`,
  exIn: `3 1\n1 1\n2 -1\n3 1`,
  exOut: `1`,
  challenge: `Find the best boundary against an opponent who gets to lie a little first.`,
},
{
  id: 47, title: 'The Learning Maze', catKey: 'ai', diff: 'VOID-Ω',
  problem: `An agent starts at a fixed cell in an N×M grid maze with walls that are fixed but unrevealed — attempting to move into a wall fails (the agent learns that edge is blocked but does not move), while a legal move always succeeds. Given the true wall layout, the start cell, and the goal cell, determine the minimum number of failed move attempts an optimally-informed adaptive agent (one that remembers everything it has learned and plans accordingly) must make in the worst case before it can guarantee reaching the goal.`,
  input: `Line 1: N M.\nWall layout description.\nFinal two lines: start cell, goal cell.`,
  output: `A single integer: the minimum guaranteed number of failed attempts.`,
  constraints: `1 ≤ N, M ≤ 500`,
  exIn: `2 2\nwalls: none\n0 0\n1 1`,
  exOut: `0`,
  challenge: `Learn the rules of a world by bumping into them, as few times as possible.`,
},
{
  id: 48, title: 'The Infinite Decision Tree', catKey: 'ai', diff: 'VOID-Ω',
  problem: `A decision tree of depth D offers K choices at every node, labeled 0..K−1. A rolling hash of the current path starts at h = 0 and updates as h := (h·P + choice) mod H after each choice. The reward earned by taking a node reached via hash h is reward(h) = (a·h + b) mod M. Determine the maximum total reward (summed over the D nodes visited after the root) achievable over any root-to-leaf path of length D, without enumerating all K^D paths.`,
  input: `Line 1: D K a b M.\nLine 2: P H.`,
  output: `A single integer: the maximum total reward over any path of length D.`,
  constraints: `1 ≤ D ≤ 60\n1 ≤ K ≤ 10\nAll values fit in 64-bit.`,
  exIn: `2 2 3 1 100\n5 1000`,
  exOut: `23`,
  challenge: `Optimize over a tree too vast to ever fully see.`,
},
{
  id: 49, title: 'The Self-Teaching Algorithm', catKey: 'ai', diff: 'VOID-Ω',
  problem: `An algorithm maintains a single integer strategy parameter S, starting at S₀. For each input xᵢ in a stream of N inputs, it outputs yᵢ = f(S, xᵢ), then updates S := g(S, xᵢ, correctᵢ) using a given correctness flag for that step (0 or 1). Given f, g, S₀, and the full stream, determine whether S converges to a fixed point within the N steps, and if so the first step at which it becomes fixed and that fixed value; otherwise output "NO CONVERGENCE".`,
  input: `Line 1: S₀.\nLines defining f and g as simple arithmetic formulas.\nLine: N.\nNext N lines: x correct.`,
  output: `The step and fixed value, or "NO CONVERGENCE".`,
  constraints: `1 ≤ N ≤ 500,000`,
  exIn: `0\nf: y = (S+x) mod 10\ng: S = correct ? S : (S+1) mod 10\n4\n3 1\n3 1\n3 1\n3 1`,
  exOut: `1 3`,
  challenge: `Watch a rule try to learn itself into stability.`,
},
{
  id: 50, title: 'The Final Problem', catKey: 'ai', diff: 'VOID-Ω',
  problem: `You are given a weighted directed graph with N nodes and M edges, each node i carrying a numeric label vᵢ. A grand path is a walk of exactly L edges starting at node 1 and ending at node N (nodes may repeat). Its score is: (sum of edge weights along the path) + (the length of the longest palindromic subsequence of the digit string formed by concatenating the decimal digits of every node's label in visiting order) − (the number of distinct prime factors of the product of the labels of every distinct node visited). Determine the maximum score over all grand paths of length exactly L, or "IMPOSSIBLE" if none exists.`,
  input: `Line 1: N M L.\nNext M lines: u v w.\nFinal line: N node labels v₁..v_N.`,
  output: `A single integer: the maximum score, or "IMPOSSIBLE".`,
  constraints: `2 ≤ N ≤ 5,000\n1 ≤ M ≤ 20,000\n1 ≤ L ≤ 10^6`,
  exIn: `2 1 1\n1 2 5\n7 3`,
  exOut: `4`,
  challenge: `Every discipline on this site, fused into a single unforgiving problem.`,
},
];

/* =========================================================
   Rendering & interaction
   ========================================================= */

const catName = (key) => CATEGORIES.find(c => c.key === key)?.name ?? key;

const state = {
  search: '',
  category: 'all',
  difficulty: 'all',
};

function padId(n) { return '#' + String(n).padStart(3, '0'); }

function matchesState(p) {
  if (state.category !== 'all' && p.catKey !== state.category) return false;
  if (state.difficulty !== 'all' && p.diff !== state.difficulty) return false;
  if (state.search) {
    const q = state.search.toLowerCase();
    const hay = (p.title + ' ' + catName(p.catKey) + ' ' + p.problem).toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

function diffBars(level) {
  let bars = '';
  for (let i = 1; i <= 5; i++) {
    bars += `<span class="bar ${i <= level ? 'filled' : ''}"></span>`;
  }
  return bars;
}

function renderGrid() {
  const grid = document.getElementById('problemGrid');
  const results = PROBLEMS.filter(matchesState);
  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = `${results.length} CHALLENGE${results.length === 1 ? '' : 'S'}`;

  if (results.length === 0) {
    grid.innerHTML = `<div class="empty-state">NO MATCHES IN THE VOID.<br><span>Try a different search or filter.</span></div>`;
    return;
  }

  grid.innerHTML = results.map(p => {
    const d = DIFF[p.diff];
    return `
    <article class="card" tabindex="0" role="button" data-id="${p.id}" aria-label="Open problem ${padId(p.id)}: ${p.title}">
      <div class="card-top">
        <span class="card-id">${padId(p.id)}</span>
        <span class="card-diff ${d.class}">${d.label}</span>
      </div>
      <h3 class="card-title">${p.title}</h3>
      <div class="card-meta">
        <span class="card-cat">${catName(p.catKey)}</span>
        <span class="card-code">${p.diff}</span>
      </div>
      <div class="card-bars" aria-hidden="true">${diffBars(d.level)}</div>
      <div class="card-footer">
        <span class="card-status">UNSOLVED</span>
        <span class="card-open">OPEN →</span>
      </div>
      <div class="card-hover-stats" aria-hidden="true">
        <span>ATTEMPTS: ——</span>
        <span>SOLVED: 0</span>
      </div>
    </article>`;
  }).join('');
}

function openProblem(id) {
  const p = PROBLEMS.find(x => x.id === id);
  if (!p) return;
  const d = DIFF[p.diff];
  const modal = document.getElementById('problemModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <div class="modal-head">
      <span class="card-id">${padId(p.id)}</span>
      <span class="card-diff ${d.class}">${d.label}</span>
    </div>
    <h2 class="modal-title">${p.title}</h2>
    <div class="modal-meta">
      <span>${catName(p.catKey)}</span>
      <span class="dot">•</span>
      <span>${p.diff}</span>
    </div>

    <div class="modal-section">
      <h3>PROBLEM</h3>
      <p>${p.problem}</p>
    </div>
    <hr class="modal-rule">
    <div class="modal-section">
      <h3>INPUT</h3>
      <p>${p.input}</p>
    </div>
    <hr class="modal-rule">
    <div class="modal-section">
      <h3>OUTPUT</h3>
      <p>${p.output}</p>
    </div>
    <hr class="modal-rule">
    <div class="modal-section">
      <h3>CONSTRAINTS</h3>
      <pre class="mono-block">${p.constraints}</pre>
    </div>
    <hr class="modal-rule">
    <div class="modal-section">
      <h3>EXAMPLE</h3>
      <div class="example-grid">
        <div>
          <span class="example-label">Input</span>
          <pre class="mono-block">${p.exIn}</pre>
        </div>
        <div>
          <span class="example-label">Output</span>
          <pre class="mono-block">${p.exOut}</pre>
        </div>
      </div>
    </div>
    <hr class="modal-rule">
    <div class="modal-section challenge-line">
      <h3>NOTE</h3>
      <p>No hints. No editorial. No solution.<br>${p.challenge}<br><strong>Can you solve it?</strong></p>
    </div>
  `;

  modal.classList.add('open');
  document.body.classList.add('modal-lock');
  history.replaceState(null, '', '#problem-' + p.id);
  document.getElementById('modalBackBtn').focus();
}

function closeProblem() {
  const modal = document.getElementById('problemModal');
  modal.classList.remove('open');
  document.body.classList.remove('modal-lock');
  if (location.hash.startsWith('#problem-')) {
    history.replaceState(null, '', location.pathname + location.search);
  }
}

function setActiveFilterButtons() {
  document.querySelectorAll('[data-filter-cat]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filterCat === state.category);
  });
  document.querySelectorAll('[data-filter-diff]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filterDiff === state.difficulty);
  });
}

function initFilters() {
  document.querySelectorAll('[data-filter-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.category = btn.dataset.filterCat;
      setActiveFilterButtons();
      renderGrid();
    });
  });
  document.querySelectorAll('[data-filter-diff]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.difficulty = btn.dataset.filterDiff;
      setActiveFilterButtons();
      renderGrid();
    });
  });
}

function initSearch() {
  const input = document.getElementById('searchInput');
  input.addEventListener('input', () => {
    state.search = input.value.trim();
    renderGrid();
  });
}

function initGridClicks() {
  const grid = document.getElementById('problemGrid');
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) openProblem(Number(card.dataset.id));
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.card');
      if (card) {
        e.preventDefault();
        openProblem(Number(card.dataset.id));
      }
    }
  });
}

function initModal() {
  document.getElementById('modalBackBtn').addEventListener('click', closeProblem);
  document.getElementById('problemModal').addEventListener('click', (e) => {
    if (e.target.id === 'problemModal') closeProblem();
  });
}

function initRandomChallenge() {
  const buttons = document.querySelectorAll('[data-random-btn]');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    btn.classList.add('spinning');
    let ticks = 0;
    const flicker = setInterval(() => {
      ticks++;
      if (ticks > 8) {
        clearInterval(flicker);
        btn.classList.remove('spinning');
        const pick = PROBLEMS[Math.floor(Math.random() * PROBLEMS.length)];
        openProblem(pick.id);
      }
    }, 60);
  }));
}

function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1 && !href.startsWith('#problem-')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('problemModal').classList.contains('open')) closeProblem();
    }
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('searchInput').focus();
    }
  });
}

function initHashRouting() {
  if (location.hash.startsWith('#problem-')) {
    const id = Number(location.hash.replace('#problem-', ''));
    if (!Number.isNaN(id)) openProblem(id);
  }
}

function initStats() {
  document.querySelectorAll('[data-total-problems]').forEach(el => el.textContent = PROBLEMS.length);
  document.querySelectorAll('[data-total-categories]').forEach(el => el.textContent = CATEGORIES.length);
}

document.addEventListener('DOMContentLoaded', () => {
  initStats();
  renderGrid();
  initFilters();
  initSearch();
  initGridClicks();
  initModal();
  initRandomChallenge();
  initMobileNav();
  initSmoothScroll();
  initKeyboard();
  initHashRouting();
});