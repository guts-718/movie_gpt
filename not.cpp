class Solution
{
public:
    int minimumSubarrayLength(vector<int> &nums, int k)
    {
        vector<int> b(32, 0);
        int t = 0;
        int l = 0;
        int mini = 1e7;
        int i = 0;
        for (; i < nums.size() && l <= i; i++)
        {
            t |= nums[i];
            int j = 0;
            while (j < 32 && l <= i)
            {
                if ((nums[i] >> j) & 1)
                {
                    b[j]++;
                }
                j++;
            }
            if (t >= k)
            {
                mini = min(mini, i - l + 1);
            }
            while (t >= k && l <= i)
            {
                int j = 0;
                while (j < 32 && l <= i)
                {
                    if ((nums[l] >> j) & 1)
                    {
                        b[j]--;
                        if (b[j] == 0)
                        {
                            t ^= (1 << j);
                        }
                    }
                    j++;
                }
                l++;
                if (t >= k)
                {
                    mini = min(mini, i - l + 1);
                    if (mini == 0)
                        mini = 1;
                }
            }
        }
        if (t >= k)
        {
            mini = min(mini, i - l + 1);
            if (mini == 0)
                mini = 1;
        }
        if (mini == 1e7)
            return -1;
        else
            return mini;
    }
};
